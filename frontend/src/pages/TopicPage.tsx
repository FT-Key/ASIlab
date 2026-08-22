import { useParams, Link } from 'react-router-dom'
import { useTopics } from '../lib/topicContext'
import { markSectionComplete, getTopicProgress, loadProgress } from '../lib/progress'
import BlockRenderer from '../components/BlockRenderer'
import ProgressRing from '../components/ProgressRing'
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from '@phosphor-icons/react'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'motion/react'

export default function TopicPage() {
  const { slug } = useParams<{ slug: string }>()
  const { getTopicBySlug } = useTopics()
  const topic = getTopicBySlug(slug || '')

  const [activeSection, setActiveSection] = useState(0)

  const progressPct = topic ? getTopicProgress(topic.id, topic.sections.length) : 0
  const progress = loadProgress()
  const completedSections = topic ? (progress[topic.id]?.completedSections || []) : []

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeSection])

  const section = topic?.sections[activeSection]

  const markComplete = () => {
    if (!topic || !section) return
    markSectionComplete(topic.id, section.id)
    if (activeSection < topic.sections.length - 1) {
      setActiveSection((s) => s + 1)
    }
  }

  if (!topic) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-4xl mb-4">📄</div>
        <div className="text-text-dim text-sm mb-4">Tema no encontrado</div>
        <Link to="/" className="btn-secondary inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-text transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Volver a todos los temas
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-24">
            <div className="glass-card p-5 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{topic.emoji}</span>
                <div>
                  <h1 className="font-bold text-text leading-tight">{topic.title}</h1>
                  <p className="text-xs text-text-dim mt-0.5">{topic.category} &middot; {topic.difficulty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <ProgressRing progress={progressPct} accent={topic.accent} />
                <div>
                  <div className="text-xs text-text-dim">Progreso</div>
                  <div className="text-sm font-semibold text-text">{Math.round(progressPct)}%</div>
                </div>
              </div>

              {topic.keyTakeaway && (
                <div className="bg-surface-overlay/30 rounded-lg p-3 text-xs text-text-muted leading-relaxed">
                  <BookOpen size={14} className="text-primary-light inline mr-1" />
                  {topic.keyTakeaway}
                </div>
              )}
            </div>

            <nav className="glass-card p-3 hidden lg:block">
              <div className="text-[10px] text-text-dim uppercase tracking-widest mb-2 px-2">
                Secciones ({topic.sections.length})
              </div>
              <div className="space-y-0.5">
                {topic.sections.map((sec, i) => {
                  const isComplete = completedSections.includes(sec.id)
                  const isActive = i === activeSection
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSection(i)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2 ${
                        isActive
                          ? 'bg-primary/15 text-primary-light font-medium'
                          : isComplete
                            ? 'text-success hover:bg-surface-overlay/30'
                            : 'text-text-muted hover:bg-surface-overlay/30'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle size={14} weight="fill" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px]">
                          {i + 1}
                        </span>
                      )}
                      <span className="truncate">{sec.title}</span>
                    </button>
                  )
                })}
              </div>
            </nav>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <div className="lg:hidden glass-card p-3 mb-4">
            <div className="flex items-center gap-3">
              <ProgressRing progress={progressPct} size={36} strokeWidth={3} accent={topic.accent} />
              <div className="flex-1">
                <div className="text-xs text-text-dim">Seccion {activeSection + 1} de {topic.sections.length}</div>
                <div className="text-sm font-semibold text-text truncate">{section?.title}</div>
              </div>
            </div>
          </div>

          {section && (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-text mb-6">{section.title}</h2>

              <div className="space-y-4">
                {section.blocks.map((block, bi) => (
                  <BlockRenderer
                    key={`${section.id}-${bi}`}
                    block={block}
                    blockIndex={bi}
                    topicId={topic.id}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-primary/10">
                <button
                  onClick={() => setActiveSection((s) => Math.max(0, s - 1))}
                  disabled={activeSection === 0}
                  className="btn-secondary flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={16} />
                  Anterior
                </button>

                <div className="flex items-center gap-3">
                  {!completedSections.includes(section.id) && (
                    <button onClick={markComplete} className="btn-primary flex items-center gap-2">
                      <CheckCircle size={16} />
                      Marcar completa
                    </button>
                  )}
                  {completedSections.includes(section.id) && (
                    <span className="tag tag-green text-xs">
                      <CheckCircle size={12} weight="fill" /> Completada
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveSection((s) => Math.min(topic.sections.length - 1, s + 1))}
                  disabled={activeSection === topic.sections.length - 1}
                  className="btn-secondary flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {topic.sources.length > 0 && (
            <div className="mt-10 pt-6 border-t border-primary/10">
              <h3 className="text-sm font-bold text-text mb-3">Fuentes y referencias</h3>
              <div className="space-y-2">
                {topic.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card p-3 hover:border-primary/30 transition-all"
                  >
                    <div className="text-sm font-medium text-primary-light hover:underline">{src.title}</div>
                    <div className="text-xs text-text-dim mt-0.5">
                      {src.source && <span className="text-secondary">{src.source}</span>}
                      {src.description && <span> — {src.description}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
