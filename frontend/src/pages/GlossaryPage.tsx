import { useTopics } from '../lib/topicContext'
import { useState, useMemo } from 'react'
import { MagnifyingGlass, BookOpenText, Warning } from '@phosphor-icons/react'
import { motion } from 'motion/react'

export default function GlossaryPage() {
  const { glossary, loading } = useTopics()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = new Set(glossary.map((g) => g.category || 'General'))
    return Array.from(cats).sort((a, b) => a.localeCompare(b))
  }, [glossary])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return glossary.filter((g) => {
      const category = g.category || 'General'
      const matchesSearch = !q ||
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q)
      const matchesCategory = !selectedCategory || category === selectedCategory
      return matchesSearch && matchesCategory
    }).sort((a, b) => a.term.localeCompare(b.term))
  }, [glossary, search, selectedCategory])

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
            <BookOpenText size={24} className="text-on-ink" weight="fill" />
          </div>
          <div>
            <h1 className="font-display text-4xl text-ink">Glosario</h1>
            <p className="text-text-muted text-sm font-mono tracking-wider uppercase">
              {glossary.length} términos clave de Administración de Sistemas de Información.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
        <div className="relative w-full lg:w-96 lg:shrink-0">
          <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-ink/50" />
          <input
            type="text"
            placeholder="Buscar término, definición o categoría..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2 lg:flex-1 lg:min-w-0">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`tag transition-all ${!selectedCategory ? 'tag-purple' : 'border-2 border-ink text-text-dim hover:bg-ink hover:text-on-ink'}`}
          >
            Todos ({glossary.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`tag transition-all ${selectedCategory === cat ? 'tag-purple' : 'border-2 border-ink text-text-dim hover:bg-ink hover:text-on-ink'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 && (
        <div className="text-[10px] text-text-dim font-mono tracking-wider uppercase mb-3">
          {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
        </div>
      )}

      {/* Terms List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="border-2 border-ink p-8 inline-block">
            <Warning size={48} className="text-text-dim mx-auto mb-4" weight="light" />
            <div className="text-text-dim text-sm font-mono tracking-wider uppercase">No se encontraron términos</div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((term, i) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="border-2 border-ink p-4 bg-surface hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[2rem] bg-ink shrink-0" />
                <div>
                  <div className="text-sm font-bold text-primary font-mono">{term.term}</div>
                  <div className="text-[10px] text-text-dim mt-0.5 font-mono tracking-wider uppercase">{term.category || 'General'}</div>
                  <div className="text-sm text-text-muted mt-1.5 leading-relaxed">{term.definition}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
