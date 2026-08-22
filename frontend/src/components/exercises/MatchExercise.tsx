import { useState } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import type { MatchPair } from '../../types'

interface MatchProps {
  pairs: MatchPair[]
  title?: string
}

export default function MatchExercise({ pairs, title }: MatchProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [shuffledRight] = useState(() => [...pairs].sort(() => Math.random() - 0.5))

  const handleLeft = (i: number) => {
    if (matched.has(i)) return
    setSelected(i)
  }

  const handleRight = (origIndex: number) => {
    if (selected === null) return
    if (origIndex === selected) {
      setMatched((m) => new Set(m).add(selected))
    }
    setSelected(null)
  }

  const allMatched = matched.size === pairs.length

  return (
    <div className="my-4 glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-text">{title || 'Relaciona los elementos'}</div>
        {allMatched && (
          <div className="tag tag-green">
            <CheckCircle size={12} weight="fill" /> Completo
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => handleLeft(i)}
              disabled={matched.has(i)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                matched.has(i)
                  ? 'bg-success/10 border-success/30 text-success'
                  : selected === i
                    ? 'bg-primary/10 border-primary/30 text-primary-dark font-medium'
                    : 'bg-surface-raised/50 border-transparent text-text-muted hover:bg-surface-overlay/50'
              }`}
            >
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((p, i) => {
            const origIndex = pairs.findIndex((pp) => pp.right === p.right)
            return (
              <button
                key={i}
                onClick={() => handleRight(origIndex)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                  matched.has(origIndex)
                    ? 'bg-success/10 border-success/30 text-success'
                    : 'bg-surface-raised/50 border-transparent text-text-muted hover:bg-surface-overlay/50'
                }`}
              >
                {p.right}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
