import mongoose from 'mongoose'
import { contentBlockSchema, sectionSchema } from '../models/contentBlocks.js'
import Topic from '../models/Topic.js'

const { Schema, model, models } = mongoose

const BlockModel =
  models['__BlockValidator'] ??
  model('__BlockValidator', new Schema({ block: { type: contentBlockSchema } }))
const SectionModel =
  models['__SectionValidator'] ??
  model('__SectionValidator', new Schema({ section: { type: sectionSchema } }))

export function stripIds(value) {
  if (Array.isArray(value)) return value.map(stripIds)
  if (value && typeof value === 'object') {
    const { _id, __v, createdAt, updatedAt, ...rest } = value
    const out = {}
    for (const [key, val] of Object.entries(rest)) out[key] = stripIds(val)
    return out
  }
  return value
}

function messages(err) {
  if (!err) return null
  return Object.values(err.errors)
    .map((e) => e.message)
    .join('; ')
}

export function validateTopic(data) {
  try {
    const doc = new Topic(stripIds(data))
    return messages(doc.validateSync())
  } catch (e) {
    return e.message
  }
}

export function validateSection(data) {
  try {
    const doc = new SectionModel({ section: stripIds(data) })
    return messages(doc.validateSync())
  } catch (e) {
    return e.message
  }
}

export function validateBlock(data) {
  try {
    const doc = new BlockModel({ block: stripIds(data) })
    return messages(doc.validateSync())
  } catch (e) {
    return e.message
  }
}
