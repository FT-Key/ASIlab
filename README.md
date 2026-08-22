# Administracion de Sistemas de Informacion

Plataforma de estudio web para la materia de Administracion de Sistemas de Informacion. Construida con React 19 + Vite + Tailwind 4 + TypeScript, Backend en Node/Express/MongoDB Atlas.

## Arquitectura

```
Administracion de Recursos/
├── content/topics/*.md          # Contenido en Markdown con bloques interactivos
├── data/topics.json             # Contenido compilado (generado por build:content)
├── scripts/
│   ├── build-content.ts         # Markdown → topics.json
│   └── seed-db.ts               # topics.json → MongoDB Atlas
├── backend/
│   ├── src/routes/topics.ts     # API REST
│   └── .env                     # URI de MongoDB Atlas
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── exercises/       # Componentes de ejercicios interactivos
│       │   ├── ui/              # Componentes base (Tabs, Accordion, Charts, etc.)
│       │   ├── Layout.tsx       # Layout con sidebar
│       │   ├── BlockRenderer.tsx # Renderizador de bloques de contenido
│       │   └── TopicCard.tsx    # Tarjeta de tema
│       ├── pages/               # Paginas (Home, TopicView, Admin, etc.)
│       ├── lib/                 # Hooks, context, utilidades
│       └── index.css            # Tokens de color (tema vibrant)
└── PLAN.md                      # Roadmap del proyecto
```

## Contenido

14 temas de estudio cubriendo:

| Tema | Contenido |
|------|-----------|
| Caso Ingenio Azucarero | Arquitectura de datos, gobernanza, toma de decisiones |
| Valor de Negocio de TI | Alineamiento estrategico, ROI, transformacion digital |
| Gobierno TI | COBIT 2019, ITIL 4, ISO 38500, PMBOK |
| ISO 38500 | Principios de gobierno corporativo de TI |
| ITIL 4 | Cadena de valor, SVS, practicas de servicio |
| Dimensiones ITIL | 4 dimensiones del SVS |
| PMBOK 8a Edicion | Gestion de proyectos, areas de conocimiento |
| PETI | Plan Estrategico de TI, alineamiento negocio-TI |
| Mapa Procesos COBIT | Dominios EDM/APO/BAI/DSS/MEA |
| Gestion del Cambio | ADKAR, resistencia al cambio, gestion organizacional |
| Habilidades Sociales | Trabajo en equipo, inteligencia emocional, liderazgo |
| Admin Estrategica de TI | Benchmarking, deuda tecnica, portafolios de servicios |

### Ejercicios Interactivos

Cada tema incluye uno o mas tipos de ejercicios:

- **Quiz** — Preguntas de seleccion multiple con scoring
- **True/False** — Afirmaciones para evaluar con explicaciones
- **Match** — Emparejar conceptos
- **Sort** — Ordenar elementos correctamente
- **Decision Path** — Arbol de decisiones interactivas
- **Essay** — Ensayos con rúbrica de evaluación
- **Flashcards** — Tarjetas de memoria con flip 3D
- **DIKW Timeline** — Jerarquia Datos→Información→Conocimiento→Comprensión→Sabiduría
- **Arch Diagram** — Diagramas SVG de gobierno TI, ERP y ciclo ITIL
- **ETL Simulator** — Comparación ETL vs ELT
- **OLAP Pivot** — Análisis multidimensional interactivo
- **Lab Guide** — Guías paso a paso con progreso

## Stack Tecnologico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19, Vite 8.2, TypeScript 6, Tailwind 4 |
| Animaciones | motion (framer-motion) |
| Charts | Recharts |
| Icons | @phosphor-icons/react |
| Backend | Node.js, Express 4, TypeScript |
| Database | MongoDB Atlas (Mongoose 8) |
| Design | Vibrant (tema claro, púrpura #6C5CE7, durazno #F7A072) |

## Instalación y Uso

```bash
# Instalar dependencias
npm run install:all

# Compilar contenido (Markdown → topics.json)
npm run build:content

# Sembrar base de datos
npm run seed

# Frontend (desarrollo)
cd frontend && npm run dev

# Backend (desarrollo)
cd backend && npm run dev

# Build de producción
npx vite build
```

## Scripts de Verificación (no levantan servidores)

```powershell
npm run build:content    # Valida parsing de Markdown
npm run seed             # Siembra MongoDB Atlas
npx vite build           # Typecheck + build de producción
```

## Color Palette

- Primary: `#6C5CE7` (púrpura vibrante)
- Secondary: `#F7A072` (durazno cálido)
- Surface: `#FFFFFF` / `#F5F3FF` / `#FAFAFE`
- Text: `#1E1B2E` (oscuro con púrpura)
- Success: `#00B894`
- Error: `#E17055`
- Warning: `#FDCB6E`

## License

Proyecto académico para la materia de Administración de Sistemas de Información.