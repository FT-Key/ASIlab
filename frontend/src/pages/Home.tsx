import { useTopics } from '../lib/topicContext'
import { loadProgress } from '../lib/progress'
import TopicCard from '../components/TopicCard'
import ContinueButton from '../components/ContinueButton'
import { MagnifyingGlass, Books, ChartLineUp } from '@phosphor-icons/react'
import { useState, useMemo } from 'react'
import { motion } from 'motion/react'

export default function Home() {
  const { topics, categories, loading } = useTopics()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const progress = loadProgress()
  const lastTopic = useMemo(() => {
    const entries = Object.entries(progress).filter(([_, p]) => p.lastVisited)
    if (entries.length === 0) return null
    entries.sort((a, b) => {
      const aTime = progress[a[0]].lastVisited || ''
      const bTime = progress[b[0]].lastVisited || ''
      return bTime.localeCompare(aTime)
    })
    return topics.find((t) => t.id === entries[0][0])
  }, [topics, progress])

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      const matchesSearch = !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      const matchesCategory = !selectedCategory || t.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [topics, search, selectedCategory])

  const totalSections = topics.reduce((sum, t) => sum + t.sections.length, 0)
  const completedSections = Object.values(progress).reduce(
    (sum, p) => sum + p.completedSections.length, 0
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <div className="text-sm text-text-dim">Cargando contenido...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl gradient-text mb-3">
          Administracion de Sistemas de Informacion
        </h1>
        <p className="text-text-muted text-sm sm:text-base max-w-2xl">
          Marco integral de gobierno, gestion y estrategia de TI basado en ISO/COBIT/ITIL/PMBOK.
          Explora los fundamentos, aplica las mejores practicas y demuestra tu conocimiento.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
            <Books size={20} className="text-primary-light" />
          </div>
          <div>
            <div className="text-lg font-bold text-text">{topics.length}</div>
            <div className="text-xs text-text-dim">Temas</div>
          </div>
        </div>
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
            <ChartLineUp size={20} className="text-secondary" />
          </div>
          <div>
            <div className="text-lg font-bold text-text">{completedSections}/{totalSections}</div>
            <div className="text-xs text-text-dim">Secciones completadas</div>
          </div>
        </div>
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-success/15 flex items-center justify-center">
            <ChartLineUp size={20} className="text-success" />
          </div>
          <div>
            <div className="text-lg font-bold text-text">
              {totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0}%
            </div>
            <div className="text-xs text-text-dim">Progreso total</div>
          </div>
        </div>
      </div>

      {lastTopic && (
        <div className="mb-8">
          <ContinueButton
            topic={lastTopic}
            lastSection={progress[lastTopic.id]?.lastVisited}
          />
        </div>
      )}

      <div className="mb-6">
        <div className="relative max-w-md">
          <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
          <input
            type="text"
            placeholder="Buscar temas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-10"
          />
        </div>
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`tag transition-all ${!selectedCategory ? 'tag-purple' : 'bg-surface-overlay/30 text-text-dim border border-transparent hover:border-primary/20'}`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
              className={`tag transition-all ${selectedCategory === cat.slug ? 'tag-purple' : 'bg-surface-overlay/30 text-text-dim border border-transparent hover:border-primary/20'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">🔍</div>
          <div className="text-text-dim text-sm">No se encontraron temas para "{search}"</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
