import { Schema } from 'mongoose'

const BLOCK_TYPES = [
  'paragraph',
  'heading',
  'list',
  'table',
  'code',
  'callout',
  'definition',
  'example',
  'quote',
  'flow',
  'quiz',
  'pivot',
  'etl',
  'dikw',
  'arch',
  'essay',
  'truefalse',
  'sort',
  'match',
  'path',
  'pyodide',
  'lab',
]

const contentBlockSchema = new Schema(
  {
    type: { type: String, required: true, enum: BLOCK_TYPES },
    text: String,
    title: String,
    items: [String],
    ordered: { type: Boolean, default: false },
    columns: [String],
    rows: [[Schema.Types.Mixed]],
    code: String,
    language: String,
    tone: { type: String, enum: ['info', 'success', 'warning', 'danger', 'idea', 'question'] },
    term: String,
    author: String,
    steps: [String],
    questions: [
      {
        question: String,
        options: [String],
        answer: { type: Number, default: 0 },
        explanation: String,
      },
    ],
    essay: [
      {
        question: String,
        hint: String,
        model: String,
        rubric: [String],
      },
    ],
    tf: [
      {
        statement: String,
        answer: { type: Boolean, default: true },
        explanation: String,
      },
    ],
    pairs: [
      {
        left: String,
        right: String,
      },
    ],
    nodes: [
      {
        id: String,
        title: String,
        prompt: String,
        isFinal: { type: Boolean, default: false },
        verdict: { type: String },
        options: [
          {
            label: String,
            target: String,
          },
        ],
      },
    ],
    pyodide: {
      csv: String,
      code: String,
      questions: [
        {
          question: String,
          answer: String,
        },
      ],
    },
    lab: [
      {
        text: String,
        command: String,
        expected: String,
      },
    ],
    kind: String,
    order: { type: Number, default: 0 },
  },
  { _id: false }
)

const sectionSchema = new Schema(
  {
    id: String,
    title: String,
    order: { type: Number, default: 0 },
    blocks: [contentBlockSchema],
  },
  { _id: false }
)

export { contentBlockSchema, sectionSchema }
