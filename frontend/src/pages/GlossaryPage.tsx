import { useTopics } from '../lib/topicContext'
import { useState, useMemo } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { motion } from 'motion/react'

export default function GlossaryPage() {
  const { glossary, loading } = useTopics()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = new Set(glossary.map((g) => g.category || 'General'))
    return ['General', ...Array.from(cats).sort()]
  }, [glossary])

  const filtered = useMemo(() => {
    return glossary.filter((g) => {
      const matchesSearch = !search ||
        g.term.toLowerCase().includes(search.toLowerCase()) ||
        g.definition.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !selectedCategory || (g.category || 'General') === selectedCategory
      return matchesSearch && matchesCategory
    }).sort((a, b) => a.term.localeCompare(b.term))
  }, [glossary, search, selectedCategory])

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
        <h1 className="font-display text-3xl gradient-text mb-2">Glosario</h1>
        <p className="text-text-muted text-sm mb-8">
          Terminos clave de Administracion de Sistemas de Informacion.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
          <input
            type="text"
            placeholder="Buscar termino..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field w-full pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`tag text-[10px] transition-all ${selectedCategory === cat ? 'tag-purple' : 'bg-surface-overlay/30 text-text-dim border border-transparent hover:border-primary/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">📖</div>
          <div className="text-text-dim text-sm">No se encontraron terminos para "{search}"</div>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((term, i) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="glass-card p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[2rem] rounded-full bg-primary shrink-0" />
                <div>
                  <div className="text-sm font-bold text-primary-light">{term.term}</div>
                  <div className="text-xs text-text-dim mt-0.5">{term.category || 'General'}</div>
                  <div className="text-sm text-text-muted mt-1 leading-relaxed">{term.definition}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
