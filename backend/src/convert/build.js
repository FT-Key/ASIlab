import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mdToTopic } from './md.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../../../data/topics.json')
const FRONTEND_DATA = path.resolve(__dirname, '../../../frontend/public/data/topics.json')
const RESOURCES_PATH = path.resolve(__dirname, '../../../data/resources.json')
const GLOSSARY_PATH = path.resolve(__dirname, '../../../content/glossary.json')
const CONTENT_DIR = path.resolve(__dirname, '../../../content/topics')

const files = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith('.md'))
  .sort()

const resourcesBySlug = fs.existsSync(RESOURCES_PATH)
  ? JSON.parse(fs.readFileSync(RESOURCES_PATH, 'utf8'))
  : {}

const topics = files
  .map((f) => {
    const slug = f.replace(/\.md$/, '')
    const topic = mdToTopic(slug, fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8'))
    topic.resources = resourcesBySlug[slug] ?? []
    return topic
  })
  .sort((a, b) => a.order - b.order)

const existing = fs.existsSync(DATA_PATH)
  ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'))
  : { meta: {}, categories: [], glossary: [] }

const glossary = fs.existsSync(GLOSSARY_PATH)
  ? JSON.parse(fs.readFileSync(GLOSSARY_PATH, 'utf8'))
  : (existing.glossary || [])

const out = {
  meta: {
    version: 1,
    lastUpdated: new Date().toISOString().slice(0, 10),
    source: 'content/topics/*.md',
    description:
      'Generado por backend/src/convert/build.js desde archivos Markdown. Los temas se editan en content/topics/ y luego se corre npm run build:content.',
  },
  categories: existing.categories || [],
  topics,
  glossary,
}

fs.writeFileSync(DATA_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8')

// Copy to frontend public folder
const frontendDir = path.dirname(FRONTEND_DATA)
if (!fs.existsSync(frontendDir)) fs.mkdirSync(frontendDir, { recursive: true })
fs.copyFileSync(DATA_PATH, FRONTEND_DATA)

console.log(`🏗️  topics.json generado: ${topics.length} temas desde content/topics/*.md`)
console.log(`📚 Glosario: ${glossary.length} terminos desde content/glossary.json`)
console.log(`📁 Copiado a frontend/public/data/topics.json`)
