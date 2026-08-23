import { useTopics } from '../lib/topicContext'
import { ArrowSquareUpRight, FileText, Video, Book, LinkIcon, Books } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { sanitizeUrl } from '../lib/security'

const typeConfig: Record<string, { icon: any; color: string; label: string }> = {
  pdf: { icon: FileText, color: 'bg-danger', label: 'PDF' },
  video: { icon: Video, color: 'bg-info', label: 'Video' },
  book: { icon: Book, color: 'bg-secondary', label: 'Libro' },
  link: { icon: LinkIcon, color: 'bg-primary', label: 'Enlace' },
  norma: { icon: FileText, color: 'bg-warning', label: 'Norma' },
}

export default function RecursosPage() {
  const { topics, loading } = useTopics()

  const allResources = topics.flatMap((t) =>
    (t.resources || []).map((r) => ({ ...r, topicTitle: t.title, topicEmoji: t.emoji }))
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-ink/30 border-t-ink animate-spin" />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-ink flex items-center justify-center">
            <Books size={24} className="text-white" weight="fill" />
          </div>
          <div>
            <h1 className="font-display text-4xl text-ink">Recursos</h1>
            <p className="text-text-muted text-sm font-mono tracking-wider uppercase">
              Normas, libros, articulos y videos de referencia.
            </p>
          </div>
        </div>
      </motion.div>

      {allResources.length === 0 ? (
        <div className="text-center py-16">
          <div className="border-2 border-ink p-8 inline-block">
            <Books size={48} className="text-text-dim mx-auto mb-4" weight="light" />
            <div className="text-text-dim text-sm font-mono tracking-wider uppercase">
              No hay recursos disponibles aun.
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allResources.map((res, i) => {
            const config = typeConfig[res.type] || typeConfig.link
            const Icon = config.icon
            const safeUrl = sanitizeUrl(res.url)
            if (!safeUrl) return null
            return (
              <motion.a
                key={res.id || i}
                href={safeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border-2 border-ink p-4 bg-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 ${config.color} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink group-hover:text-primary transition-colors truncate">
                      {res.title}
                    </div>
                    <div className="text-xs text-text-dim mt-0.5 font-mono tracking-wider uppercase">
                      {res.topicEmoji} {res.topicTitle}
                    </div>
                    {res.description && (
                      <div className="text-xs text-text-muted mt-1 line-clamp-2">{res.description}</div>
                    )}
                  </div>
                  <ArrowSquareUpRight size={16} className="text-text-dim group-hover:text-primary shrink-0 transition-colors" />
                </div>
              </motion.a>
            )
          })}
        </div>
      )}
    </div>
  )
}
