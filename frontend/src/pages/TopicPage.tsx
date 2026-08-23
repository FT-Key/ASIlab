import { useParams, Link } from 'react-router-dom'
import { useTopics } from '../lib/topicContext'
import { markSectionComplete, getTopicProgress, loadProgress } from '../lib/progress'
import { getTopicIcon } from '../lib/topicIcons'
import { sanitizeUrl } from '../lib/security'
import BlockRenderer from '../components/BlockRenderer'
import ProgressRing from '../components/ProgressRing'
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen, FileX, List, Clock } from '@phosphor-icons/react'
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
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="border-2 border-ink p-8">
          <FileX size={48} className="text-text-dim mx-auto mb-4" weight="light" />
          <div className="text-text-dim text-sm mb-4 font-mono tracking-wider uppercase">Tema no encontrado</div>
          <Link to="/" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const TopicIcon = getTopicIcon(topic.emoji)

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-ink transition-colors mb-6 font-mono tracking-wider uppercase"
      >
        <ArrowLeft size={16} />
        Volver a todos los temas
      </Link>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-24">
            <div className="border-2 border-ink p-5 mb-4 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                  <TopicIcon size={24} className="text-white" weight="regular" />
                </div>
                <div>
                  <h1 className="font-display text-xl text-ink leading-tight">{topic.title}</h1>
                  <p className="text-[10px] text-text-dim mt-0.5 font-mono tracking-wider uppercase">{topic.category} · {topic.difficulty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <ProgressRing progress={progressPct} accent={topic.accent} />
                <div>
                  <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Progreso</div>
                  <div className="text-sm font-bold text-ink">{Math.round(progressPct)}%</div>
                </div>
              </div>

              {topic.keyTakeaway && (
                <div className="bg-surface-overlay p-3 text-xs text-text-muted leading-relaxed border border-ink/20">
                  <BookOpen size={14} className="text-primary inline mr-1" weight="fill" />
                  {topic.keyTakeaway}
                </div>
              )}
            </div>

            {/* Section Navigation */}
            <nav className="border-2 border-ink p-3 hidden lg:block bg-white">
              <div className="flex items-center gap-2 text-[10px] text-text-dim font-mono tracking-wider uppercase mb-2 px-2">
                <List size={12} />
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
                      className={`w-full text-left px-3 py-2.5 text-xs transition-all flex items-center gap-2.5 ${
                        isActive
                          ? 'bg-ink text-white font-semibold'
                          : isComplete
                            ? 'text-success hover:bg-surface-overlay font-medium'
                            : 'text-text-muted hover:bg-surface-overlay'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle size={14} weight="fill" />
                      ) : (
                        <span className={`w-5 h-5 border-2 flex items-center justify-center text-[10px] font-bold ${
                          isActive ? 'border-white text-white' : 'border-current'
                        }`}>
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

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Progress */}
          <div className="lg:hidden border-2 border-ink p-3 mb-4 bg-white">
            <div className="flex items-center gap-3">
              <ProgressRing progress={progressPct} size={36} strokeWidth={3} accent={topic.accent} />
              <div className="flex-1">
                <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Seccion {activeSection + 1} de {topic.sections.length}</div>
                <div className="text-sm font-semibold text-ink truncate">{section?.title}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-h-[50vh]">
            <div className="flex-1">
              {section && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-ink flex items-center justify-center">
                      <span className="text-sm font-bold text-white font-mono">{activeSection + 1}</span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl text-ink">{section.title}</h2>
                      <div className="flex items-center gap-2 text-[10px] text-text-dim mt-0.5 font-mono tracking-wider uppercase">
                        <Clock size={10} />
                        <span>Seccion {activeSection + 1} de {topic.sections.length}</span>
                      </div>
                    </div>
                  </div>

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
                </motion.div>
              )}
            </div>

            {/* Sticky Navigation */}
            <div className="sticky bottom-0 bg-white border-t-2 border-ink pt-4 pb-2 -mx-6 px-6 mt-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveSection((s) => Math.max(0, s - 1))}
                  disabled={activeSection === 0}
                  className="btn-secondary flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                >
                  <ArrowLeft size={14} />
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {!completedSections.includes(section?.id || '') && (
                    <button onClick={markComplete} className="btn-primary flex items-center gap-1.5 text-xs">
                      <CheckCircle size={14} />
                      Marcar completa
                    </button>
                  )}
                  {completedSections.includes(section?.id || '') && (
                    <span className="tag tag-green text-[10px]">
                      <CheckCircle size={11} weight="fill" /> Completada
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveSection((s) => Math.min(topic.sections.length - 1, s + 1))}
                  disabled={activeSection === topic.sections.length - 1}
                  className="btn-secondary flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                >
                  Siguiente
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Sources */}
          {topic.sources.length > 0 && (
            <div className="mt-8 pt-5 border-t-2 border-ink">
              <h3 className="text-[10px] font-bold text-ink mb-3 font-mono tracking-wider uppercase">Fuentes y referencias</h3>
              <div className="space-y-2">
                {topic.sources.map((src, i) => {
                  const safeUrl = sanitizeUrl(src.url)
                  if (!safeUrl) return null
                  return (
                    <a
                      key={i}
                      href={safeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-ink p-3 bg-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
                    >
                      <div className="text-sm font-semibold text-primary hover:underline">{src.title}</div>
                      <div className="text-xs text-text-dim mt-0.5">
                        {src.source && <span className="text-secondary font-mono font-semibold">{src.source}</span>}
                        {src.description && <span> — {src.description}</span>}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
