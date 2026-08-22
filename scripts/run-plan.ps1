# =============================================================================
# run-plan.ps1 — Ejecuta PLAN.md paso a paso de forma automatica.
#
# Cada checkbox "- [ ]" de la seccion "## 7. Plan de implementacion por fases"
# es UN paso = UNA sesion nueva de opencode. El bucle lanza las sesiones en
# orden y avanza solo hasta que el ultimo paso este marcado como [x].
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1
#   powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1 -Step 5
#   powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1 -DryRun
#   powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1 -ContinueOnError
#   powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1 -TimeoutMin 90
# =============================================================================

[CmdletBinding()]
param(
    [int]$Step = 0,               # arrancar desde el paso N (1..total)
    [int]$Retries = 1,            # reintentos por paso antes de declararlo fallido
    [int]$TimeoutMin = 45,        # timeout por sesion (minutos)
    [switch]$ContinueOnError,     # seguir con el siguiente paso aunque uno falle
    [string]$Agent = "build",     # agente usado en cada sesion
    [switch]$DryRun               # solo listar los pasos, no ejecutar
)

$ErrorActionPreference = "Stop"

# forzar UTF-8 en consola y lectura de archivos (PLAN.md es UTF-8)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$utf8 = [System.Text.Encoding]::UTF8

# --- Rutas -------------------------------------------------------------------
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$planPath = Join-Path $root "PLAN.md"
$logDir   = Join-Path $root "logs"
$stepDir  = Join-Path $logDir "steps"
New-Item -ItemType Directory -Force -Path $logDir  | Out-Null
New-Item -ItemType Directory -Force -Path $stepDir | Out-Null

$logFile = Join-Path $logDir "plan-run.log"
$ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-Log {
    param([string]$Msg)
    $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $Msg"
    Add-Content -LiteralPath $logFile -Value $line -Encoding UTF8
    Write-Host $line
}

# --- Resolucion del binario opencode (exe real, no los shims .cmd/.ps1) ---------
$ocExe = $null
$exe = Get-Command opencode.exe -ErrorAction SilentlyContinue
if ($exe) {
    $ocExe = $exe.Source
} else {
    # derivar el exe a partir del shim opencode.cmd (basedir\node_modules\opencode-ai\bin\opencode.exe)
    $shim = Get-Command opencode.cmd -ErrorAction SilentlyContinue
    if ($shim) {
        $npmDir = Split-Path -Parent $shim.Source
        $cand = Join-Path (Join-Path $npmDir "node_modules\opencode-ai\bin") "opencode.exe"
        if (Test-Path -LiteralPath $cand) { $ocExe = $cand }
    }
    if (-not $ocExe) {
        # fallback: ruta npm global tipica
        $cand = "C:\Users\Fr4nc\AppData\Roaming\npm\node_modules\opencode-ai\bin\opencode.exe"
        if (Test-Path -LiteralPath $cand) { $ocExe = $cand }
    }
}
if (-not $ocExe -or -not (Test-Path -LiteralPath $ocExe)) {
    Write-Log "ERROR: no se encontro el binario de opencode (.exe)."
    exit 2
}

# --- Parseo de pasos -----------------------------------------------------------
function Get-PlanSteps {
    param([string]$Path)
    $lines = Get-Content -LiteralPath $Path -Encoding UTF8
    $inSection = $false
    $steps = @()
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $l = $lines[$i]
        if ($l -match '^##\s*7\.') { $inSection = $true; continue }
        if ($inSection -and $l -match '^##\s*[0-9]') { break }
        if ($inSection -and $l -match '^-\s*\[\s*([ x])\s*\]\s*(.*)$') {
            $steps += [pscustomobject]@{
                Number  = $steps.Count + 1
                Line    = $i + 1
                Checked = ($Matches[1] -eq 'x')
                Text    = $Matches[2].Trim()
            }
        }
    }
    return $steps
}

# --- Quoting de argumentos (reglas CommandLineToArgvW) --------------------------
function ConvertTo-Argv {
    param([string[]]$Argv)
    $parts = foreach ($a in $Argv) {
        if ($a -match '[\s"]') {
            $escaped = $a -replace '\\+$', '$0$0' -replace '"', '\"'
            '"' + $escaped + '"'
        } else {
            $a
        }
    }
    return ($parts -join ' ')
}

# --- Plantilla de instrucciones por paso ---------------------------------------
function New-StepInstructions {
    param([pscustomobject]$Step)
    $tpl = @'
# Ejecucion automatica del plan - Paso %%NUM%%

Estas ejecutando automaticamente el plan del proyecto en PLAN.md.

## Tu tarea (EXACTA)
Ejecutar SOLO este paso:

> %%TEXT%%

## Reglas
1. Lee PLAN.md (fuente de verdad) y todo archivo o codigo que necesites (README.md, PLAN-COMPLETADO.md, content/, frontend/, backend/).
2. Hace UNICAMENTE lo que pide este paso. NO avances a otros pasos ni deshagas trabajo de pasos anteriores.
3. Verifica tu trabajo antes de dar por terminado el paso (compilar: npm run build y/o npm run build:content si aplica; probar lo creado).
4. Cuando el paso este REALMENTE terminado y verificado, marca SU checkbox como [x] en PLAN.md editando unicamente esa linea (linea %%LINE%%).
5. Si algo te bloquea: NO marques el checkbox; deja un comentario <!-- BLOQUEADO: <razon> --> en esa misma linea y explica el motivo en tu respuesta final.
6. No modifiques los checkboxes de otros pasos ni el resto del documento.

## Respuesta final (concisa)
- Que hiciste
- Que verificaste
- Estado del checkbox (marcado / bloqueado)
'@
    $tpl = $tpl.Replace('%%NUM%%', [string]$Step.Number)
    $tpl = $tpl.Replace('%%LINE%%', [string]$Step.Line)
    $tpl = $tpl.Replace('%%TEXT%%', $Step.Text)
    return $tpl
}

# --- Logica principal -----------------------------------------------------------
trap {
    Write-Log "EXCEPCION: $($_.Exception.ToString())"
    Write-Log "STACK: $($_.ScriptStackTrace)"
    exit 1
}

Write-Log "=== Inicio del runner (PLAN.md) ==="

$steps = @(Get-PlanSteps -Path $planPath)
if ($steps.Count -eq 0) {
    Write-Log "No se encontraron pasos en la seccion 7 de PLAN.md."
    exit 0
}

Write-Log "Paso$($steps.Count) totales en la seccion 7."

# punto de inicio
$startIdx = if ($Step -ge 1) { $Step - 1 } else { 0 }

$pending = @($steps | Where-Object { $_.Checked -eq $false })
if ($pending.Count -eq 0) {
    Write-Log "Todos los pasos ya estan marcados [x]. Nada que ejecutar."
    exit 0
}

if ($DryRun) {
    Write-Log "== MODO DRY-RUN =="
    for ($i = $startIdx; $i -lt $steps.Count; $i++) {
        $s = $steps[$i]
        $state = if ($s.Checked) { "[x]" } else { "[ ]" }
        Write-Log ("  Paso {0,2} (linea {1,3}) {2}  {3}" -f $s.Number, $s.Line, $state, $s.Text)
    }
    Write-Log "== Fin dry-run =="
    exit 0
}

$failed = @()
$doneCount = 0

for ($i = $startIdx; $i -lt $steps.Count; $i++) {
    $item = $steps[$i]
    if ($item.Checked) { continue }

    Write-Log ("Paso {0}/{1}: {2}" -f $item.Number, $steps.Count, $item.Text)

    # instrucciones en archivo adjunto (evita problemas de quoting en la CLI)
    $instFile = Join-Path $stepDir ("step-{0:D2}.md" -f $item.Number)
    [System.IO.File]::WriteAllText($instFile, (New-StepInstructions -Step $item), $utf8)

    $title = ("Paso {0}: {1}" -f $item.Number, ($item.Text.Substring(0, [Math]::Min(60, $item.Text.Length))))
    $message = "Ejecuta el paso descrito en el archivo adjunto, trabajando en el directorio del proyecto."

    $argv = ConvertTo-Argv -Argv @(
        "run",
        "--dir", $root,
        "--auto",
        "--agent", $Agent,
        "--title", $title,
        $message,
        "-f", $instFile
    )

    $ok = $false
    for ($attempt = 1; $attempt -le ($Retries + 1); $attempt++) {
        Write-Log ("  Intentando sesion (intento {0}/{1})..." -f $attempt, ($Retries + 1))

        $stdoutFile = Join-Path $stepDir ("step-{0:D2}-{1}-out.log" -f $item.Number, $attempt)
        $stderrFile = Join-Path $stepDir ("step-{0:D2}-{1}-err.log" -f $item.Number, $attempt)

        $psi = New-Object System.Diagnostics.ProcessStartInfo
        $psi.FileName = $ocExe
        $psi.WorkingDirectory = $root
        $psi.UseShellExecute = $false
        $psi.CreateNoWindow = $true
        $psi.Arguments = $argv

        $proc = [System.Diagnostics.Process]::Start($psi)

        $timeoutMs = [int]($TimeoutMin * 60000)
        if (-not $proc.WaitForExit($timeoutMs)) {
            Write-Log ("  TIMEOUT (>{0} min). Matando proceso." -f $TimeoutMin)
            & taskkill /PID $proc.Id /T /F 2>$null | Out-Null
            Start-Sleep -Seconds 3
            $proc.WaitForExit()
        }

        $exitCode = $proc.ExitCode
        Write-Log ("  Sesion terminada. Exit code: {0}" -f $exitCode)

        # re-evaluar estado del checkbox (re-parseo fresco por si cambian lineas)
        $fresh = @(Get-PlanSteps -Path $planPath)
        $matched = @($fresh | Where-Object { $_.Text -eq $item.Text })
        if ($matched.Count -gt 0 -and $matched[0].Checked) {
            $ok = $true
            break
        }
        Write-Log "  El checkbox sigue sin marcar."
    }

    if ($ok) {
        $doneCount++
        Write-Log ("  [OK] Paso {0} completado." -f $item.Number)
    } else {
        Write-Log ("  [FALLO] Paso {0} no completado tras {1} intentos." -f $item.Number, ($Retries + 1))
        $failed += $item.Number
        if (-not $ContinueOnError) {
            Write-Log "  Deteniendo por error (usa -ContinueOnError para seguir)."
            break
        }
    }
}

# resumen
Write-Log "=== Resumen ==="
if ($failed.Count -gt 0) {
    Write-Log ("Pasos fallidos: {0}" -f ($failed -join ", "))
} else {
    $remaining = @(Get-PlanSteps -Path $planPath | Where-Object { $_.Checked -eq $false })
    if ($remaining.Count -eq 0) {
        Write-Log "PLAN COMPLETADO: todos los pasos de la seccion 7 estan marcados [x]."
    } else {
        Write-Log ("Quedan {0} pasos sin marcar." -f $remaining.Count)
    }
}
Write-Log "=== Fin del runner ==="

if ($failed.Count -gt 0) { exit 1 }
exit 0