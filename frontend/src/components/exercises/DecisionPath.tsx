import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import type { PathNode } from '../../types'

interface DecisionPathProps {
  nodes: PathNode[]
  title?: string
}

export default function DecisionPath({ nodes, title }: DecisionPathProps) {
  const [history, setHistory] = useState<string[]>(['1'])
  const currentId = history[history.length - 1]
  const node = nodes.find((n) => n.id === currentId)

  if (!node) return null

  const handleOption = (target: string) => {
    setHistory((h) => [...h, target])
  }

  const goBack = () => {
    setHistory((h) => h.slice(0, -1))
  }

  const restart = () => {
    setHistory(['1'])
  }

  return (
    <div className="my-4 glass-card p-5">
      {title && <div className="text-sm font-semibold text-text mb-3">{title}</div>}
      <motion.div
        key={currentId}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="text-sm font-bold text-primary mb-2">{node.title}</div>
        <div className="text-sm text-text-muted mb-4 leading-relaxed">{node.prompt}</div>
        {node.isFinal ? (
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-sm text-success font-medium">
            {node.verdict || 'Fin del recorrido'}
          </div>
        ) : (
          <div className="space-y-2">
            {node.options?.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(opt.target)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm bg-surface-raised/50 hover:bg-primary/10 text-text-muted hover:text-primary-dark transition-all border border-transparent hover:border-primary/20"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </motion.div>
      <div className="flex items-center gap-3 mt-4">
        {history.length > 1 && !node.isFinal && (
          <button onClick={goBack} className="text-xs text-text-dim hover:text-text flex items-center gap-1 transition-colors">
            <ArrowUUpLeft size={14} /> Volver
          </button>
        )}
        {node.isFinal && (
          <button onClick={restart} className="btn-secondary text-sm">
            Empezar de nuevo
          </button>
        )}
      </div>
      {history.length > 1 && (
        <div className="flex items-center gap-1 mt-3 text-[10px] text-text-dim">
          {history.map((id, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span>→</span>}
              <span className="px-1.5 py-0.5 rounded bg-surface-overlay/50">{nodes.find((n) => n.id === id)?.title || id}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
