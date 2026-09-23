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
2. Editar el glosario en `content/glossary.json` (array de `{ term, definition, category }`).
3. `npm run build:content` para regenerar `data/topics.json` (incluye el glosario).
4. `npm run seed` si la API lee de la base.
5. `npm run build` para typecheck del frontend.

## Sitio público y seguridad de la API

- El sitio es **público** (estudiantes). El panel `/admin` es **solo de desarrollo**: se registra únicamente cuando `import.meta.env.DEV` es verdadero y se elimina del bundle de producción.
- El frontend **no tiene cliente de escritura**: `frontend/src/api/client.ts` fue eliminado. La administración se hace editando `content/` + `npm run build:content` + `npm run seed`.
- Todas las mutaciones de la API (`POST/PUT/DELETE` en `/api/topics`, secciones, bloques) están protegidas por el middleware `requireAdmin` (`backend/src/middleware/security.js`):
  - Con `ADMIN_TOKEN` configurado: exige el header `x-admin-token` (comparación en tiempo constante).
  - Sin `ADMIN_TOKEN`: permite escritura solo si `NODE_ENV === 'development'` (explícito); en cualquier otro caso responde `403`.
- Los rate-limiters de escritura se registran **antes** del router (si se mueven después, nunca se ejecutan).
- No usar scripts inline en `index.html` (el CSP de Helmet solo permite `'self'`); el arranque de tema vive en `frontend/public/theme-init.js`.

## Otros

- El estilo de la UI es el skill `awesome` (variante artistic); las fuentes académicas/técnicas van con el skill `research`.
- Mensajes de commit en español, imperativo breve (ej. "Completa Fase 3: ...").
- Los snapshots de `.playwright-mcp/` están ignorados: no se commitean.
- Paleta de colores: #3B82F6 (primario azul), #8B5CF6 (secundario violeta), #111827 (ink/negro), #FFFFFF (superficies).
- Tema claro y oscuro con toggle (clase `dark` en `<html>`, persistido en `localStorage` clave `asilab-theme`, default segun `prefers-color-scheme`).
- Fuentes: Inter (body), Limelight (display), JetBrains Mono (mono).
- Estilo artistico: bordes negros de 2px, esquinas sin radio, sombras offset, etiquetas uppercase.

## Estado verificado (2026-09-22)

- **MongoDB Atlas**: 15 temas y 69 términos de glosario (10 categorías) en `administracion_sistemas`
- **Build frontend**: `npx tsc -b && npx vite build` sin errores
- **Build content**: `npm run build:content` genera `data/topics.json` con 15 temas + 69 términos
- **Seed**: `npm run seed` siembra MongoDB correctamente
- **Frontend**: React 19 + Vite 8 + Tailwind 4 + TypeScript 6
- **Backend**: Express 4 + Mongoose 8, puerto 4001
- **Ejercicios**: 15 temas con Quiz, TrueFalse, Match, Sort, Essay, Path, Arch
- **Admin**: panel dev-only (`import.meta.env.DEV`), fuera del bundle de producción

### Comandos verificados
```powershell
npm run install:all      # Instala backend + frontend
npm run build:content    # Markdown → topics.json
npm run seed             # topics.json → MongoDB Atlas
npx vite build           # Frontend build (3.53s)
```
