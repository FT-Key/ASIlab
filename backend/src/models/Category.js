import { Schema, model } from 'mongoose'

const categorySchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    label: String,
    emoji: String,
    color: String,
    description: String,
  },
  { timestamps: true }
)

export default model('Category', categorySchema)
