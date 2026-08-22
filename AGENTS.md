# AGENTS.md

Reglas para sesiones de opencode en este repo.

## Contexto

Plataforma React + Vite + TS (frontend) y Node/Express/MongoDB (backend) para estudiar Administración de Sistemas de Información. El contenido vive en `content/topics/*.md` y se convierte a `data/topics.json` con `npm run build:content`. El roadmap está en `PLAN.md`.

## Regla crítica: NO levantar servidores para probar

- **NUNCA** ejecutes `npm run dev`, `npm run dev:backend`, `npm run dev:frontend`, ni `npm.cmd` para "probar" la UI o la API.
- Tampoco lances `Start-Process`/procesos en background ni sesiones de Playwright contra un servidor local.
- Levantar servidores **cuelga la sesión** (el comando no termina) y bloquea el plan.

## Verificación permitida (no cuelgan)

- `npm run build:content` — regenera `data/topics.json` desde `content/topics/*.md` (valida el parsing).
- `npm run seed` — siembra la base (pseudo-DB o MongoDB).
- `npm run build` — typecheck + build de producción del frontend (`tsc -b && vite build`).
- Scripts de validación puntuales con `node`.
- La verificación visual de la UI queda para el usuario; no la intentes con servidores.

## Formato de ejercicios en markdown

El parser (`backend/src/convert/md.js`) usa formato pipe-separated, NO JSON:

```
:::quiz Titulo
1. Pregunta || Opcion A || Opcion B || Opcion C || indice_respuesta || explicacion
:::

:::truefalse Titulo
1. Afirmacion || Verdadero/Falso || explicacion
:::

:::sort Titulo
- Elemento 1
- Elemento 2
:::

:::match Titulo
- Izquierda | Derecha
:::

:::essay Titulo
1. Pregunta || Pista: pista || Respuesta modelo: modelo || [rubrica: c1, c2]
:::

:::path Titulo
1 | Titulo | Prompt | Opcion1=2; Opcion2=3
2 | Final | Prompt | * | Veredicto
:::

:::arch gobierno-ti
(sin cierre :::)
```

## Editar contenido

1. Editar los archivos `content/topics/*.md` (bloques `:::tipo` con pipe-separated).
2. `npm run build:content` para regenerar `data/topics.json`.
3. `npm run seed` si la API lee de la base.
4. `npm run build` para typecheck del frontend.

## Otros

- El estilo de la UI es el skill `vibrant`; las fuentes académicas/técnicas van con el skill `research`.
- Mensajes de commit en español, imperativo breve (ej. "Completa Fase 3: ...").
- Los snapshots de `.playwright-mcp/` están ignorados: no se commitean.
- Paleta de colores: #6C5CE7 (primario), #F7A072 (secundario), superficies claras (#FFFFFF, #F5F3FF).
- Tema claro fijo (sin toggle dark/light).

## Estado verificado (2026-08-22)

- **MongoDB Atlas**: 14 temas sembrados en `administracion_sistemas.topics`
- **Build frontend**: `npx vite build` compila sin errores (3.53s)
- **Build content**: `npm run build:content` genera `data/topics.json` con 14 temas
- **Seed**: `npm run seed` siembra MongoDB correctamente
- **Frontend**: React 19 + Vite 8 + Tailwind 4 + TypeScript 6
- **Backend**: Express 4 + Mongoose 8, puerto 4001
- **Ejercicios**: 14 temas con Quiz, TrueFalse, Match, Sort, Essay, Path, Arch

### Comandos verificados
```powershell
npm run install:all      # Instala backend + frontend
npm run build:content    # Markdown → topics.json
npm run seed             # topics.json → MongoDB Atlas
npx vite build           # Frontend build (3.53s)
```
