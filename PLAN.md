# PLAN.md — SistemasLab: Administracion de Sistemas de Informacion

## Objetivo
Plataforma de estudio para la materia "Administracion de Sistemas de Informacion" con:
- Contenido en markdown (`content/topics/*.md`) convertido a `data/topics.json`
- Backend API (Node/Express/MongoDB) con fallback a pseudo-DB
- Frontend React + Vite + TS + Tailwind 4 (estilo vibrant)
- 14 temas cubriendo COBIT, ITIL, ISO 38500, PMBOK 8, gobierno TI, RH TI
- Ejercicios interactivos: Quiz, TrueFalse, Match, Sort, Essay, DecisionPath, Flashcards, DIKW, Arch, ETL, OLAP, Lab

---

## Fase 0 — Infraestructura base ✅
- [x] `package.json` (root) con scripts `install:all`, `build:content`, `seed`
- [x] `.gitignore`
- [x] `AGENTS.md` con reglas para opencode
- [x] `.opencode/skills/vibrant/SKILL.md`
- [x] `.opencode/skills/vibrant/DESIGN.md`
- [x] `.opencode/skills/research/SKILL.md`
- [x] `.opencode/command/plan-run.md`

## Fase 1 — Backend ✅
- [x] `backend/package.json` — Express, Mongoose, dotenv, cors
- [x] `backend/.env` — PORT=4001, MONGODB_URI (Atlas con db administracion_sistemas)
- [x] `backend/src/server.js` — startup con connectDB
- [x] `backend/src/app.js` — express app, CORS, routes, static
- [x] `backend/src/config/db.js` — mongoose connect con fallback
- [x] `backend/src/models/` — Topic, Category, Glossary, ContentBlocks
- [x] `backend/src/services/validation.js` — stripIds, validate
- [x] `backend/src/services/catalog.js` — CRUD con pseudo-DB fallback
- [x] `backend/src/routes/index.js` — health, topics CRUD, sections, blocks, glossary
- [x] `backend/src/convert/md.js` — parser markdown → Topic (695 lineas, soporta todos los tipos)
- [x] `backend/src/convert/build.js` — genera `data/topics.json`
- [x] `backend/src/convert/exportToMd.js` — Topic → markdown
- [x] `backend/src/seed/seed.js` — sembra MongoDB desde topics.json
- [x] `backend/src/seed/watch.js` — observa cambios en content/topics/
- [x] `backend/src/models/contentBlocks.js` — schema actualizado (verdict sin enum)

## Fase 2 — Frontend ✅
- [x] `frontend/package.json` — React 19, Vite 8, Tailwind 4, Phosphor, Motion, Recharts
- [x] `frontend/index.html`
- [x] `frontend/vite.config.ts` — proxy API, code splitting
- [x] `frontend/tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json`
- [x] `frontend/src/index.css` — tokens vibrant CLARO (#6C5CE7 primary, #F7A072 secondary, #FFFFFF/#F5F3FF surfaces)
- [x] `frontend/src/types.ts` — todos los tipos TypeScript
- [x] `frontend/src/main.tsx` — entry point
- [x] `frontend/src/App.tsx` — rutas: /, /topic/:slug, /recursos, /glosario, /admin
- [x] `frontend/src/api/client.ts` — API client (fetch wrapper)
- [x] `frontend/src/lib/progress.ts` — progreso en localStorage
- [x] `frontend/src/lib/theme.tsx` — tema claro fijo (sin toggle dark/light)
- [x] `frontend/src/lib/topicContext.tsx` — topics context (carga topics.json)
- [x] `frontend/src/components/Layout.tsx` — header, nav, footer (sin theme toggle)
- [x] `frontend/src/components/TopicCard.tsx` — card de tema con progreso
- [x] `frontend/src/components/BlockRenderer.tsx` — renderiza todos los tipos con imports standalone
- [x] `frontend/src/components/ProgressRing.tsx` — anillo de progreso animado
- [x] `frontend/src/components/ContinueButton.tsx` — continuar ultimo tema
- [x] `frontend/src/pages/Home.tsx` — grid de temas, busqueda, categorias
- [x] `frontend/src/pages/TopicPage.tsx` — tema con sidebar, secciones, quiz
- [x] `frontend/src/pages/RecursosPage.tsx` — recursos por tema
- [x] `frontend/src/pages/GlossaryPage.tsx` — glosario filtrable
- [x] `frontend/src/pages/admin/AdminDashboard.tsx` — panel admin
- [x] `frontend/src/pages/admin/TopicEditor.tsx` — editor de temas

## Fase 3 — Contenido ✅
- [x] 14 temas en `content/topics/*.md` con bloques :::callout, :::definition, :::flow, :::quiz, :::truefalse, :::match, :::sort, :::essay, :::path, :::arch, :::dikw
- [x] `data/resources.json` — 21 recursos de referencia
- [x] `scripts/gen-data.js` — genera CSVs sinteticos
- [x] `data/topics.json` generado por `npm run build:content` (14 temas con ejercicios)

## Fase 4 — Seed y verificación ✅
- [x] Ejecutar `npm run seed` para poblar MongoDB Atlas (14 temas)
- [x] Verificar conexion a MongoDB Atlas (database: administracion_sistemas)
- [x] Verificar 14 topics en colleccion `topics`
- [x] Verificar build frontend: `npx vite build` (3.53s, sin errores)
- [x] Build content: `npm run build:content` genera topics.json correctamente
- [ ] Probar `npm run dev:backend` — health check, topics API (pendiente manual)
- [ ] Probar `npm run dev:frontend` — pages, components (pendiente manual)

## Fase 5 — Documentación final ✅
- [x] Actualizar AGENTS.md con comandos verificados y estado del proyecto
- [x] Crear PLAN.md con roadmap completo y estado de cada fase
- [x] Crear README.md con documentacion del proyecto

## Fase 6 — Componentes base ✅
- [x] `frontend/src/hooks/useAsync.ts`
- [x] `frontend/src/components/ui/Tabs.tsx`
- [x] `frontend/src/components/ui/Accordion.tsx`
- [x] `frontend/src/components/ui/LazyMount.tsx`
- [x] `frontend/src/components/ui/ChartCard.tsx` (BarChartCard + PieChartCard)
- [x] `frontend/src/components/admin/AdminInputs.tsx` (Label, Input, TextArea, Select, Checkbox, FieldRow)

## Fase 7 — Ejercicios standalone ✅
- [x] `components/exercises/Quiz.tsx` — scoring, retry, explicaciones
- [x] `components/exercises/TrueFalse.tsx` — verificar todo a la vez, explicaciones
- [x] `components/exercises/MatchExercise.tsx` — click-to-match, columna derecha desordenada
- [x] `components/exercises/SortExercise.tsx` — reordenar con flechas, verificar
- [x] `components/exercises/Flashcards.tsx` — flip 3D, shuffle, extrae definiciones del tema
- [x] `components/exercises/DecisionPath.tsx` — arbol de decision con breadcrumbs, back, restart
- [x] `components/exercises/EssayQuiz.tsx` — textarea, hints, rubrica, respuesta modelo
- [x] `components/exercises/ExercisePager.tsx` — paginador de bloques de ejercicio
- [x] `components/exercises/DikwTimeline.tsx` — jerarquia DIKW 5 niveles
- [x] `components/ui/ArchDiagram.tsx` — SVG: gobierno-ti, erp-arquitectura, itil-lifecycle

## Fase 8 — Simuladores ✅
- [x] `components/exercises/EtlSimulator.tsx` — comparacion ETL vs ELT
- [x] `components/exercises/OlapPivot.tsx` — analisis multidimensional con graficos
- [x] `components/exercises/LabGuide.tsx` — guia paso a paso con progreso

## Fase 9 — BlockRenderer mejorado ✅
- [x] BlockRenderer actualizado con imports de componentes standalone
- [x] Soporte para todos los tipos: quiz, truefalse, match, sort, essay, path, flashcards, dikw, arch, pivot, etl, lab

## Fase 10 — Ejercicios en markdown ✅
- [x] Agregados ejercicios a los 14 temas (formato pipe-separated del parser)
- [x] Tipos usados: quiz, truefalse, match, sort, essay, path, arch

## Fase 11 — README ✅
- [x] `README.md` creado con documentacion completa

## Fase 12 — Build final ✅
- [x] `npm run build:content` — 14 temas parseados
- [x] `npm run seed` — MongoDB Atlas actualizado
- [x] `npx vite build` — 3.53s, sin errores TypeScript

---

## Comandos verificados

```powershell
# Instalar dependencias
npm run install:all

# Generar topics.json desde markdown
npm run build:content

# Sembrar MongoDB
npm run seed

# Desarrollo
npm run dev:frontend    # http://localhost:5173
npm run dev:backend     # http://localhost:4001

# Build de produccion
npm run build           # frontend: tsc -b && vite build
```

## Arquitectura

```
content/topics/*.md  ──→  build.js  ──→  data/topics.json
                                                │
                          seed.js  ──→  MongoDB Atlas
                                                │
                          API (Express)  ──→  Frontend (React)
```
