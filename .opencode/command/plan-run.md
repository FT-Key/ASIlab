---
description: Ejecuta automaticamente el plan de PLAN.md paso a paso
agent: build
---

Ejecuta el runner del plan:

```
powershell -ExecutionPolicy Bypass -File scripts/run-plan.ps1 $ARGUMENTS
```

Pasos validos:
- `/plan-run` (desde el principio)
- `/plan-run -Step 5` (arrancar en el paso 5)
- `/plan-run -DryRun` (listar pasos sin ejecutar)
- `/plan-run -ContinueOnError` (no detenerse si un paso falla)

Corre el comando con la herramienta bash desde la raiz del proyecto y reporta el resumen final.
