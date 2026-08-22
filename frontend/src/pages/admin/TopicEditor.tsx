import { useParams, Link } from 'react-router-dom'
import { useTopics } from '../../lib/topicContext'
import { api } from '../../api/client'
import BlockRenderer from '../../components/BlockRenderer'
import { ArrowLeft, Plus, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import { motion } from 'motion/react'

export default function TopicEditor() {
  const { slug } = useParams<{ slug: string }>()
  const { getTopicBySlug, reload } = useTopics()
  const topic = getTopicBySlug(slug || '')

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-text-dim text-sm mb-4">Tema no encontrado</div>
        <Link to="/admin" className="btn-secondary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Volver
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-text transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Volver al panel
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{topic.emoji}</span>
          <div>
            <h1 className="text-2xl font-bold text-text">{topic.title}</h1>
            <p className="text-xs text-text-dim">{topic.category} &middot; {topic.difficulty}</p>
          </div>
        </div>

        {error && (
          <div className="bg-danger/10 border border-danger/30 rounded-xl p-4 mb-4 text-sm text-danger">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {topic.sections.map((section, si) => (
            <div key={section.id} className="glass-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-text">
                  {si + 1}. {section.title}
                </h2>
                <div className="flex items-center gap-1.5">
                  <button className="w-7 h-7 rounded flex items-center justify-center text-text-dim hover:text-primary-light hover:bg-primary/10 transition-all">
                    <Plus size={14} />
                  </button>
                  <button className="w-7 h-7 rounded flex items-center justify-center text-text-dim hover:text-danger hover:bg-danger/10 transition-all">
                    <Trash size={14} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {section.blocks.map((block, bi) => (
                  <div key={bi} className="relative group">
                    <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <BlockRenderer block={block} blockIndex={bi} topicId={topic.id} />
                  </div>
                ))}
              </div>

              {section.blocks.length === 0 && (
                <div className="text-center py-8 text-text-dim text-xs">
                  Esta seccion no tiene bloques de contenido.
                </div>
              )}
            </div>
          ))}
        </div>

        {topic.sections.length === 0 && (
          <div className="text-center py-16 glass-card">
            <div className="text-4xl mb-4">📝</div>
            <div className="text-text-dim text-sm">
              Este tema no tiene secciones. Edita el archivo .md en content/topics/
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
