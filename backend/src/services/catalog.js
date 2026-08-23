import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isDbConnected } from '../config/db.js'
import Topic from '../models/Topic.js'
import Category from '../models/Category.js'
import Glossary from '../models/Glossary.js'
import { stripIds, validateTopic } from './validation.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, '../../../data/topics.json')
const CSV_DIR = path.resolve(__dirname, '../../../data/csv')

export function getCsvPath(file) {
  if (!/^[a-zA-Z0-9._-]+$/.test(String(file ?? ''))) return null
  const resolved = path.resolve(CSV_DIR, file)
  const rel = path.relative(CSV_DIR, resolved)
  if (rel.startsWith('..') || path.isAbsolute(rel)) return null
  return resolved
}

export function csvExists(file) {
  const full = getCsvPath(file)
  return full && fs.existsSync(full)
}

let pseudoDb = null

function loadPseudoDb() {
  if (!pseudoDb) {
    pseudoDb = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'))
  }
  return pseudoDb
}

function savePseudoDb(db) {
  pseudoDb = db
  fs.writeFileSync(DATA_PATH, JSON.stringify(db, null, 2) + '\n', 'utf8')
}

function normalizeDoc(doc) {
  return doc ? stripIds(doc.toObject()) : null
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function mutateTopic(slug, mutateFn) {
  const topic = await getTopicBySlug(slug)
  if (!topic) return null
  const updated = mutateFn(stripIds(topic))
  const error = validateTopic(updated)
  if (error) throw new Error(error)
  if (isDbConnected()) {
    const doc = await Topic.findOne({ slug })
    if (!doc) return null
    doc.set(stripIds(updated))
    await doc.save()
  } else {
    const db = loadPseudoDb()
    const idx = db.topics.findIndex((t) => t.slug === slug)
    if (idx === -1) return null
    db.topics[idx] = stripIds(updated)
    db.topics.sort((a, b) => a.order - b.order)
    savePseudoDb(db)
  }
  return stripIds(updated)
}

export async function getHealth() {
  return {
    ok: true,
    db: isDbConnected() ? 'mongodb' : 'pseudo-db',
  }
}

export async function getCategories() {
  if (isDbConnected()) {
    const cats = await Category.find().sort({ _id: 1 })
    return cats.map(normalizeDoc)
  }
  return loadPseudoDb().categories
}

export async function getTopics(includeSections = true) {
  if (isDbConnected()) {
    const projection = includeSections ? {} : { sections: 0 }
    const topics = await Topic.find({}, projection).sort({ order: 1 })
    return topics.map(normalizeDoc)
  }
  const db = loadPseudoDb()
  if (includeSections) return db.topics
  return db.topics.map(({ sections, ...rest }) => rest)
}

export async function getTopicBySlug(slug) {
  if (isDbConnected()) {
    const topic = await Topic.findOne({ slug })
    return normalizeDoc(topic)
  }
  return loadPseudoDb().topics.find((t) => t.slug === slug) ?? null
}

export async function getGlossary() {
  if (isDbConnected()) {
    const entries = await Glossary.find().sort({ term: 1 })
    return entries.map(normalizeDoc)
  }
  return loadPseudoDb().glossary
}

export async function getGlossaryByTerm(term) {
  const safeTerm = String(term ?? '').trim()
  if (!safeTerm) return null
  if (isDbConnected()) {
    const entry = await Glossary.findOne({ term: safeTerm })
    if (!entry) {
      const all = await Glossary.find()
      const match = all.find((e) => e.term.toLowerCase() === safeTerm.toLowerCase())
      return match ? normalizeDoc(match) : null
    }
    return normalizeDoc(entry)
  }
  const target = safeTerm.toLowerCase()
  return loadPseudoDb().glossary.find((g) => g.term.toLowerCase() === target) ?? null
}

export async function createTopic(data) {
  const clean = stripIds(data)
  clean.id = clean.id ?? clean.slug ?? slugify(clean.title ?? 'tema')
  clean.slug = clean.slug ?? slugify(clean.title ?? clean.id)
  clean.sections = clean.sections ?? []
  clean.resources = clean.resources ?? []
  if (clean.order == null) {
    const all = await getTopics(false)
    clean.order = all.length ? Math.max(...all.map((t) => t.order ?? 0)) + 1 : 1
  }
  const error = validateTopic(clean)
  if (error) throw new Error(error)
  if (isDbConnected()) {
    const doc = new Topic(clean)
    await doc.save()
    return normalizeDoc(doc)
  }
  const db = loadPseudoDb()
  if (db.topics.some((t) => t.slug === clean.slug)) {
    throw Object.assign(new Error('Ya existe un tema con ese identificador'), { status: 409 })
  }
  db.topics.push(clean)
  db.topics.sort((a, b) => a.order - b.order)
  savePseudoDb(db)
  return clean
}

export async function updateTopic(slug, data) {
  return mutateTopic(slug, (t) => ({ ...t, ...stripIds(data) }))
}

export async function deleteTopic(slug) {
  if (isDbConnected()) {
    const res = await Topic.deleteOne({ slug })
    return res.deletedCount > 0
  }
  const db = loadPseudoDb()
  const idx = db.topics.findIndex((t) => t.slug === slug)
  if (idx === -1) return false
  db.topics.splice(idx, 1)
  savePseudoDb(db)
  return true
}

export async function updateTopicResources(slug, resources) {
  return mutateTopic(slug, (t) => ({ ...t, resources: stripIds(resources ?? []) }))
}

export async function updateTopicSources(slug, sources) {
  return mutateTopic(slug, (t) => ({ ...t, sources: stripIds(sources ?? []) }))
}

export async function addTopicSection(slug, sectionData) {
  return mutateTopic(slug, (t) => {
    const section = stripIds(sectionData)
    section.id = section.id ?? slugify(section.title ?? 'seccion')
    t.sections = t.sections ?? []
    t.sections.push(section)
    return t
  })
}

export async function updateTopicSection(slug, sectionId, sectionData) {
  return mutateTopic(slug, (t) => {
    const sections = t.sections ?? []
    const idx = sections.findIndex((s) => s.id === sectionId)
    if (idx === -1) throw Object.assign(new Error('Sección no encontrada'), { status: 404 })
    sections[idx] = { ...sections[idx], ...stripIds(sectionData), id: sectionId }
    return t
  })
}

export async function deleteTopicSection(slug, sectionId) {
  return mutateTopic(slug, (t) => {
    t.sections = (t.sections ?? []).filter((s) => s.id !== sectionId)
    return t
  })
}

export async function addTopicBlock(slug, sectionId, blockData) {
  return mutateTopic(slug, (t) => {
    const sections = t.sections ?? []
    const idx = sections.findIndex((s) => s.id === sectionId)
    if (idx === -1) throw Object.assign(new Error('Sección no encontrada'), { status: 404 })
    sections[idx].blocks = sections[idx].blocks ?? []
    sections[idx].blocks.push(stripIds(blockData))
    return t
  })
}

export async function updateTopicBlock(slug, sectionId, blockIndex, blockData) {
  return mutateTopic(slug, (t) => {
    const sections = t.sections ?? []
    const idx = sections.findIndex((s) => s.id === sectionId)
    if (idx === -1) throw Object.assign(new Error('Sección no encontrada'), { status: 404 })
    const blocks = sections[idx].blocks ?? []
    if (blockIndex < 0 || blockIndex >= blocks.length) throw Object.assign(new Error('Bloque fuera de rango'), { status: 400 })
    blocks[blockIndex] = { ...blocks[blockIndex], ...stripIds(blockData) }
    return t
  })
}

export async function deleteTopicBlock(slug, sectionId, blockIndex) {
  return mutateTopic(slug, (t) => {
    const sections = t.sections ?? []
    const idx = sections.findIndex((s) => s.id === sectionId)
    if (idx === -1) throw Object.assign(new Error('Sección no encontrada'), { status: 404 })
    const blocks = sections[idx].blocks ?? []
    if (blockIndex < 0 || blockIndex >= blocks.length) throw Object.assign(new Error('Bloque fuera de rango'), { status: 400 })
    sections[idx].blocks = blocks.filter((_, i) => i !== blockIndex)
    return t
  })
}
