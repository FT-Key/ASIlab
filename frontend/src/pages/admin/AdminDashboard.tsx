import { useTopics } from '../../lib/topicContext'
import { loadProgress, resetProgress } from '../../lib/progress'
import { Link } from 'react-router-dom'
import { Plus, PencilSimple, Trash, ChartLineUp, Books, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { useMemo } from 'react'

export default function AdminDashboard() {
  const { topics, categories, glossary, loading } = useTopics()
  const progress = loadProgress()

  const stats = useMemo(() => {
    const totalSections = topics.reduce((sum, t) => sum + t.sections.length, 0)
    const completedSections = Object.values(progress).reduce(
      (sum, p) => sum + p.completedSections.length, 0
    )
    const totalBlocks = topics.reduce(
      (sum, t) => sum + t.sections.reduce((s, sec) => s + sec.blocks.length, 0), 0
    )
    return { totalSections, completedSections, totalBlocks }
  }, [topics, progress])

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
        <h1 className="font-display text-3xl gradient-text mb-2">Panel de Administracion</h1>
        <p className="text-text-muted text-sm mb-8">
          Gestionar temas, contenido y progreso del curso.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-4 text-center">
          <Books size={24} className="text-primary-light mx-auto mb-2" />
          <div className="text-2xl font-bold text-text">{topics.length}</div>
          <div className="text-xs text-text-dim">Temas</div>
        </div>
        <div className="glass-card p-4 text-center">
          <ChartLineUp size={24} className="text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-text">{stats.totalBlocks}</div>
          <div className="text-xs text-text-dim">Bloques de contenido</div>
        </div>
        <div className="glass-card p-4 text-center">
          <ChartLineUp size={24} className="text-success mx-auto mb-2" />
          <div className="text-2xl font-bold text-text">{stats.completedSections}/{stats.totalSections}</div>
          <div className="text-xs text-text-dim">Secciones completadas</div>
        </div>
        <div className="glass-card p-4 text-center">
          <Books size={24} className="text-info mx-auto mb-2" />
          <div className="text-2xl font-bold text-text">{glossary.length}</div>
          <div className="text-xs text-text-dim">Terminos en glosario</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-text">Temas del curso</h2>
        <button
          onClick={() => { if (confirm('Resetear todo el progreso?')) resetProgress() }}
          className="tag tag-red text-[10px] cursor-pointer hover:bg-danger/20 transition-colors"
        >
          <Trash size={10} /> Reset progreso
        </button>
      </div>

      <div className="space-y-2">
        {topics.map((topic, i) => {
          const tp = progress[topic.id]
          const completed = tp?.completedSections.length || 0
          const total = topic.sections.length
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-3 sm:p-4 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4"
            >
              <span className="text-xl sm:text-2xl">{topic.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-text truncate">{topic.title}</div>
                <div className="text-[10px] sm:text-xs text-text-dim">
                  {topic.category} &middot; {topic.difficulty} &middot; {total} secciones
                </div>
              </div>
              <div className="hidden sm:block text-xs text-text-dim w-16 text-right">{completed}/{total}</div>
              <div className="hidden sm:block w-24 h-1.5 rounded-full bg-surface-overlay overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${topic.accent}, ${topic.accent}88)`,
                  }}
                />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  to={`/admin/topic/${topic.slug}`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-dim hover:text-primary-light hover:bg-primary/10 transition-all"
                >
                  <PencilSimple size={16} />
                </Link>
                <Link
                  to={`/topic/${topic.slug}`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-dim hover:text-primary-light hover:bg-primary/10 transition-all"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>

      {topics.length === 0 && (
        <div className="text-center py-16 glass-card">
          <div className="text-4xl mb-4">📝</div>
          <div className="text-text-dim text-sm mb-4">
            No hay temas creados. Crea archivos .md en content/topics/ y ejecuta npm run build:content
          </div>
        </div>
      )}
    </div>
  )
}
