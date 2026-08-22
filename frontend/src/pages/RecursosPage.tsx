import { useTopics } from '../lib/topicContext'
import { ArrowSquareUpRight, FileText, Video, Book, LinkIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'

const typeConfig: Record<string, { icon: any; color: string; label: string }> = {
  pdf: { icon: FileText, color: 'text-danger', label: 'PDF' },
  video: { icon: Video, color: 'text-info', label: 'Video' },
  book: { icon: Book, color: 'text-secondary', label: 'Libro' },
  link: { icon: LinkIcon, color: 'text-primary-light', label: 'Enlace' },
  norma: { icon: FileText, color: 'text-warning', label: 'Norma' },
}

export default function RecursosPage() {
  const { topics, loading } = useTopics()

  const allResources = topics.flatMap((t) =>
    (t.resources || []).map((r) => ({ ...r, topicTitle: t.title, topicEmoji: t.emoji }))
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl gradient-text mb-2">Recursos</h1>
        <p className="text-text-muted text-sm mb-8">
          Normas, libros, articulos y videos de referencia para cada tema.
        </p>
      </motion.div>

      {allResources.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">📚</div>
          <div className="text-text-dim text-sm">
            No hay recursos disponibles aun. Agrega resources.json en la raiz del proyecto.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allResources.map((res, i) => {
            const config = typeConfig[res.type] || typeConfig.link
            const Icon = config.icon
            return (
              <motion.a
                key={res.id || i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass-card p-4 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-surface-overlay flex items-center justify-center ${config.color} shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-text group-hover:text-primary-light transition-colors truncate">
                      {res.title}
                    </div>
                    <div className="text-xs text-text-dim mt-0.5">
                      {res.topicEmoji} {res.topicTitle}
                    </div>
                    {res.description && (
                      <div className="text-xs text-text-muted mt-1 line-clamp-2">{res.description}</div>
                    )}
                  </div>
                  <ArrowSquareUpRight size={16} className="text-text-dim group-hover:text-primary-light shrink-0 transition-colors" />
                </div>
              </motion.a>
            )
          })}
        </div>
      )}
    </div>
  )
}
