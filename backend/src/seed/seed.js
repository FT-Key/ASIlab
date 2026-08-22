import 'dotenv/config'
import mongoose from 'mongoose'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import Topic from '../models/Topic.js'
import Category from '../models/Category.js'
import Glossary from '../models/Glossary.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../../../data/topics.json')
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/administracion_sistemas'

async function seed() {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 })
  const data = JSON.parse(readFileSync(DATA_PATH, 'utf8'))

  await Promise.all([
    Topic.deleteMany({}),
    Category.deleteMany({}),
    Glossary.deleteMany({}),
  ])

  await Category.insertMany(data.categories)
  await Topic.insertMany(data.topics)
  await Glossary.insertMany(data.glossary)

  console.log(`🌱 Seed completado: ${data.topics.length} temas, ${data.categories.length} categorias, ${data.glossary.length} terminos.`)
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('❌ No se pudo sembrar (¿esta MongoDB corriendo?):', err.message)
  process.exit(1)
})
