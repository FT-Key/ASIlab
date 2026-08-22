import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.resolve(__dirname, '../../../content/topics')

let debounce = null

function build() {
  const { execSync } = await import('node:child_process')
  execSync('node src/convert/build.js', { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' })
}

fs.watch(CONTENT_DIR, { recursive: true }, (_event, filename) => {
  if (!filename?.endsWith('.md')) return
  clearTimeout(debounce)
  debounce = setTimeout(() => {
    console.log(`📝 Cambio detectado en ${filename}, regenerando...`)
    try {
      build()
    } catch (e) {
      console.error('❌ Error al regenerar:', e.message)
    }
  }, 300)
})

console.log(`👁️  Observando ${CONTENT_DIR} por cambios...`)
