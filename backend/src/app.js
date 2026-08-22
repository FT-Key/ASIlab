import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_PATH = path.resolve(__dirname, '../../frontend/dist')
const HAS_DIST = fs.existsSync(path.join(DIST_PATH, 'index.html'))
const SERVE_STATIC = process.env.SERVE_STATIC !== '0' && HAS_DIST

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', routes)

if (SERVE_STATIC) {
  app.use(express.static(DIST_PATH))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'))
  })
  console.log(`📦 Sirviendo frontend desde ${DIST_PATH}`)
} else {
  app.get('/', (_req, res) => {
    res.json({
      name: 'Administracion de Sistemas de Informacion API',
      endpoints: ['/api/health', '/api/topics', '/api/topics/:slug', '/api/categories', '/api/glossary'],
    })
  })
}

export default app
