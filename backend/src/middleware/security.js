import { timingSafeEqual } from 'node:crypto'

const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const SAFE_ID = /^[a-zA-Z0-9_-]{1,128}$/
const SAFE_FILE = /^[a-zA-Z0-9._-]+$/
const MAX_SLUG_LEN = 200
const MAX_ID_LEN = 128

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a))
  const bufB = Buffer.from(String(b))
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

// Las rutas de escritura (POST/PUT/DELETE) quedan bloqueadas salvo autorizacion.
// - Si existe ADMIN_TOKEN, se exige el header x-admin-token (comparacion en tiempo constante).
// - Sin ADMIN_TOKEN solo se permite escribir con NODE_ENV=development explicito.
//   En cualquier otro caso (produccion, NODE_ENV sin definir, staging) se rechaza.
export function requireAdmin(req, res, next) {
  const configured = process.env.ADMIN_TOKEN
  if (configured) {
    const provided = req.get('x-admin-token') || ''
    if (provided && safeEqual(provided, configured)) return next()
    return res.status(401).json({ error: 'No autorizado' })
  }
  if (process.env.NODE_ENV === 'development') return next()
  return res.status(403).json({ error: 'La administracion esta deshabilitada. Configure ADMIN_TOKEN.' })
}

export function validateSlug(req, res, next) {
  const { slug } = req.params
  if (!slug || typeof slug !== 'string' || !SAFE_SLUG.test(slug) || slug.length > MAX_SLUG_LEN) {
    return res.status(400).json({ error: 'Slug inválido' })
  }
  next()
}

export function validateSectionId(req, res, next) {
  const { sectionId } = req.params
  if (!sectionId || typeof sectionId !== 'string' || !SAFE_ID.test(sectionId) || sectionId.length > MAX_ID_LEN) {
    return res.status(400).json({ error: 'Section ID inválido' })
  }
  next()
}

export function validateBlockIndex(req, res, next) {
  const { blockIndex } = req.params
  const idx = Number(blockIndex)
  if (!Number.isInteger(idx) || idx < 0 || idx > 10000) {
    return res.status(400).json({ error: 'Block index inválido' })
  }
  req.params.blockIndex = idx
  next()
}

export function validateCsvFile(req, res, next) {
  const { file } = req.params
  if (!file || typeof file !== 'string' || !SAFE_FILE.test(file) || file.length > 200) {
    return res.status(400).json({ error: 'Nombre de archivo inválido' })
  }
  next()
}

export function validateTopicBody(req, res, next) {  const body = req.body
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Body inválido' })
  }
  if (body.title !== undefined && typeof body.title !== 'string') {
    return res.status(400).json({ error: 'Campo title debe ser texto' })
  }
  if (body.slug !== undefined && typeof body.slug !== 'string') {
    return res.status(400).json({ error: 'Campo slug debe ser texto' })
  }
  if (body.description !== undefined && typeof body.description !== 'string') {
    return res.status(400).json({ error: 'Campo description debe ser texto' })
  }
  if (body.category !== undefined && typeof body.category !== 'string') {
    return res.status(400).json({ error: 'Campo category debe ser texto' })
  }
  if (body.difficulty !== undefined && !['beginner', 'intermediate', 'advanced'].includes(body.difficulty)) {
    return res.status(400).json({ error: 'Campo difficulty inválido' })
  }
  next()
}

export function sanitizeUrl(url) {
  if (typeof url !== 'string') return null
  const trimmed = url.trim()
  if (/^\s*javascript\s*:/i.test(trimmed)) return null
  if (/^\s*data\s*:/i.test(trimmed)) return null
  if (/^\s*vbscript\s*:/i.test(trimmed)) return null
  if (/^\s*blob\s*:/i.test(trimmed)) return null
  try {
    const parsed = new URL(trimmed)
    if (!['http:', 'https:'].includes(parsed.protocol)) return null
    return trimmed
  } catch {
    if (trimmed.startsWith('/') || trimmed.startsWith('#')) return trimmed
    return null
  }
}
