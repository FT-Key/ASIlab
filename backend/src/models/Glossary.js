import { Schema, model } from 'mongoose'

const glossarySchema = new Schema(
  {
    term: { type: String, required: true, unique: true },
    definition: { type: String, required: true },
  },
  { timestamps: true }
)

export default model('Glossary', glossarySchema)
