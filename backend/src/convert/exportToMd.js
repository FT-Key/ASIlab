import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { topicToMd } from './md.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../../../data/topics.json')
const CONTENT_DIR = path.resolve(__dirname, '../../../content/topics')

const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'))
fs.mkdirSync(CONTENT_DIR, { recursive: true })

for (const topic of data.topics) {
  const file = path.join(CONTENT_DIR, `${topic.slug}.md`)
  fs.writeFileSync(file, topicToMd(topic), 'utf8')
  console.log(`✓ ${file.replace(/\\/g, '/')}`)
}
console.log(`\nExportados ${data.topics.length} temas a content/topics/`)