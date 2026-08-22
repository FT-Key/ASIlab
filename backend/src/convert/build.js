import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mdToTopic } from './md.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../../../data/topics.json')
const RESOURCES_PATH = path.resolve(__dirname, '../../../data/resources.json')
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
  glossary: existing.glossary || [],
}

fs.writeFileSync(DATA_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8')
console.log(`🏗️  topics.json generado: ${topics.length} temas desde content/topics/*.md`)
