import { useTopics } from '../lib/topicContext'
import { loadProgress } from '../lib/progress'
import TopicCard from '../components/TopicCard'
import ContinueButton from '../components/ContinueButton'
import { MagnifyingGlass, Books, ChartLineUp, Warning, Shield, Target, BookOpen, GraduationCap, ArrowRight, Sparkle, Brain, Lightbulb, Rocket } from '@phosphor-icons/react'
import { useState, useMemo } from 'react'
import { motion } from 'motion/react'

const FRAMEWORKS = [
  { name: 'COBIT', icon: Target, color: '#3B82F6' },
  { name: 'ITIL', icon: Rocket, color: '#8B5CF6' },
  { name: 'ISO', icon: Shield, color: '#16A34A' },
  { name: 'PMBOK', icon: Brain, color: '#D97706' },
]

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
          <div className="w-12 h-12 border-4 border-ink/30 border-t-ink animate-spin mx-auto mb-4" />
          <div className="text-sm text-text-dim font-mono tracking-wider uppercase">Cargando...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="border-2 border-ink p-6 sm:p-8 relative bg-surface">
          {/* Decorative grid */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 overflow-hidden">
            <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-ink" style={{ opacity: i % 3 === 0 ? 1 : 0.3 }} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 font-mono">
              Plataforma de Estudio · 14 Temas
            </p>
            
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
              ADMINISTRACION
              <br />
              DE <span className="text-primary">SISTEMAS</span>
              <br />
              DE INFORMACION.
            </h1>
            
            <p className="text-text-muted text-sm sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
              Marco integral de gobierno, gestion y estrategia de TI basado en 
              <span className="font-semibold text-ink"> COBIT, ITIL, ISO 38500 y PMBOK</span>.
            </p>

            {/* Framework pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {FRAMEWORKS.map((fw) => {
                const Icon = fw.icon
                return (
                  <div
                    key={fw.name}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider border-2 border-ink transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
                    style={{
                      background: fw.color,
                      color: 'white',
                    }}
                  >
                    <Icon size={12} weight="bold" />
                    {fw.name}
                  </div>
                )
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              {lastTopic ? (
                <a
                  href={`/topic/${lastTopic.slug}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  Continuar aprendiendo
                </a>
              ) : (
                <a
                  href={`/topic/${topics[0]?.slug || ''}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ArrowRight size={16} />
                  Comenzar ahora
                </a>
              )}
              <a
                href="/glosario"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Target size={16} />
                Ver glosario
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-ink p-4 bg-surface hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Books size={18} className="text-white" weight="fill" />
            </div>
            <div>
              <div className="text-lg font-bold text-ink">{topics.length}</div>
              <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Temas</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-ink p-4 bg-surface hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary flex items-center justify-center">
              <ChartLineUp size={18} className="text-white" weight="fill" />
            </div>
            <div>
              <div className="text-lg font-bold text-ink">{totalSections}</div>
              <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Secciones</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-ink p-4 bg-surface hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success flex items-center justify-center">
              <Shield size={18} className="text-white" weight="fill" />
            </div>
            <div>
              <div className="text-lg font-bold text-ink">{completedSections}</div>
              <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Completadas</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-ink p-4 bg-surface hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-idea flex items-center justify-center">
              <Lightbulb size={18} className="text-white" weight="fill" />
            </div>
            <div>
              <div className="text-lg font-bold text-ink">
                {totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0}%
              </div>
              <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase">Progreso</div>
            </div>
          </div>
        </motion.div>
      </div>

      {lastTopic && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <ContinueButton
            topic={lastTopic}
            lastSection={progress[lastTopic.id]?.lastVisited}
          />
        </motion.div>
      )}

      {/* Search and Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-ink/50" />
          <input
            type="text"
            placeholder="Buscar temas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-10"
          />
        </div>
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`tag transition-all ${!selectedCategory ? 'tag-purple' : 'border-2 border-ink text-text-dim hover:bg-ink hover:text-on-ink'}`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                className={`tag transition-all ${selectedCategory === cat.slug ? 'tag-purple' : 'border-2 border-ink text-text-dim hover:bg-ink hover:text-on-ink'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Topics Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="border-2 border-ink p-8 inline-block">
            <Warning size={48} className="text-text-dim mx-auto mb-4" weight="light" />
            <div className="text-text-dim text-sm font-mono tracking-wider uppercase">No se encontraron temas</div>
          </div>
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
