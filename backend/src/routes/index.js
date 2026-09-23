import { Router } from 'express'
import fs from 'node:fs'
import {
  getHealth,
  getCategories,
  getTopics,
  getTopicBySlug,
  getGlossary,
  getGlossaryByTerm,
  createTopic,
  updateTopic,
  deleteTopic,
  updateTopicResources,
  updateTopicSources,
  addTopicSection,
  updateTopicSection,
  deleteTopicSection,
  addTopicBlock,
  updateTopicBlock,
  deleteTopicBlock,
  getCsvPath,
  csvExists,
} from '../services/catalog.js'
import {
  validateSlug,
  validateSectionId,
  validateBlockIndex,
  validateCsvFile,
  validateTopicBody,
  requireAdmin,
} from '../middleware/security.js'

const router = Router()

function asyncHandler(fn) {
  return (req, res) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      const status = err.status || 400
      res.status(status).json({ error: 'Error en la solicitud' })
    })
  }
}

router.get('/health', asyncHandler(async (_req, res) => {
  res.json(await getHealth())
}))

router.get('/categories', asyncHandler(async (_req, res) => {
  res.json(await getCategories())
}))

router.get('/topics', asyncHandler(async (req, res) => {
  const includeSections = req.query.full !== '0'
  res.json(await getTopics(includeSections))
}))

router.get('/topics/:slug', validateSlug, asyncHandler(async (req, res) => {
  const topic = await getTopicBySlug(req.params.slug)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.post('/topics', requireAdmin, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await createTopic(req.body ?? {})
  res.status(201).json(topic)
}))

router.put('/topics/:slug', requireAdmin, validateSlug, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await updateTopic(req.params.slug, req.body ?? {})
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.delete('/topics/:slug', requireAdmin, validateSlug, asyncHandler(async (req, res) => {
  const deleted = await deleteTopic(req.params.slug)
  if (!deleted) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json({ ok: true })
}))

router.put('/topics/:slug/resources', requireAdmin, validateSlug, asyncHandler(async (req, res) => {
  const topic = await updateTopicResources(req.params.slug, req.body?.resources)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.put('/topics/:slug/sources', requireAdmin, validateSlug, asyncHandler(async (req, res) => {
  const topic = await updateTopicSources(req.params.slug, req.body?.sources)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.post('/topics/:slug/sections', requireAdmin, validateSlug, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await addTopicSection(req.params.slug, req.body ?? {})
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.status(201).json(topic)
}))

router.put('/topics/:slug/sections/:sectionId', requireAdmin, validateSlug, validateSectionId, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await updateTopicSection(req.params.slug, req.params.sectionId, req.body ?? {})
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.delete('/topics/:slug/sections/:sectionId', requireAdmin, validateSlug, validateSectionId, asyncHandler(async (req, res) => {
  const topic = await deleteTopicSection(req.params.slug, req.params.sectionId)
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.post('/topics/:slug/sections/:sectionId/blocks', requireAdmin, validateSlug, validateSectionId, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await addTopicBlock(req.params.slug, req.params.sectionId, req.body ?? {})
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.status(201).json(topic)
}))

router.put('/topics/:slug/sections/:sectionId/blocks/:blockIndex', requireAdmin, validateSlug, validateSectionId, validateBlockIndex, validateTopicBody, asyncHandler(async (req, res) => {
  const topic = await updateTopicBlock(
    req.params.slug,
    req.params.sectionId,
    req.params.blockIndex,
    req.body ?? {}
  )
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.delete('/topics/:slug/sections/:sectionId/blocks/:blockIndex', requireAdmin, validateSlug, validateSectionId, validateBlockIndex, asyncHandler(async (req, res) => {
  const topic = await deleteTopicBlock(
    req.params.slug,
    req.params.sectionId,
    req.params.blockIndex
  )
  if (!topic) return res.status(404).json({ error: 'Tema no encontrado' })
  res.json(topic)
}))

router.get('/glossary', asyncHandler(async (_req, res) => {
  res.json(await getGlossary())
}))

router.get('/data/csv/:file', validateCsvFile, asyncHandler(async (req, res) => {
  const { file } = req.params
  if (!getCsvPath(file) || !csvExists(file)) {
    return res.status(404).json({ error: 'Archivo no encontrado' })
  }
  res.type('text/csv')
  res.send(fs.readFileSync(getCsvPath(file)))
}))

router.get('/glossary/:term', asyncHandler(async (req, res) => {
  const entry = await getGlossaryByTerm(req.params.term)
  if (!entry) return res.status(404).json({ error: 'Termino no encontrado' })
  res.json(entry)
}))

export default router
