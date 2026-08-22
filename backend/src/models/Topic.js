import { Schema, model } from 'mongoose'
import { sectionSchema } from './contentBlocks.js'

const topicSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    emoji: String,
    accent: String,
    category: { type: String, required: true, index: true },
    difficulty: {
      type: String,
      enum: ['principiante', 'intermedio', 'avanzado'],
      default: 'principiante',
    },
    order: { type: Number, default: 0 },
    description: String,
    tags: [String],
    keyTakeaway: String,
    resources: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        description: String,
        source: String,
      },
    ],
    sources: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        description: String,
        source: String,
      },
    ],
    sections: [sectionSchema],
  },
  { timestamps: true }
)

export default model('Topic', topicSchema)
