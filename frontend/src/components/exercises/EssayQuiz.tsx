import { useState } from 'react'
import { motion } from 'motion/react'
import { Lightbulb, CheckCircle, Info } from '@phosphor-icons/react'
import type { EssayQuestion } from '../../types'

interface EssayProps {
  questions: EssayQuestion[]
  title?: string
}

export default function EssayQuiz({ questions, title }: EssayProps) {
  const [drafts, setDrafts] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggleReveal = (i: number) => {
    setRevealed((r) => new Set(r).add(i))
  }

  const toggleCheck = (i: number, rubricIdx: number) => {
    const key = `${i}-${rubricIdx}`
    setChecked((c) => {
      const next = new Set(c)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const hasText = (i: number) => (drafts[i] || '').trim().length > 0

  const checkedCount = (i: number, total: number) => {
    let n = 0
    for (let j = 0; j < total; j++) if (checked.has(`${i}-${j}`)) n++
    return n
  }

  return (
    <div className="my-4 glass-card p-5">
      <div className="text-sm font-semibold text-text mb-2">{title || 'Desarrollo'}</div>

      <div className="flex items-start gap-2 text-xs text-text-muted bg-primary/5 border border-primary/15 rounded-xl p-3 mb-4">
        <Info size={14} className="shrink-0 mt-0.5 text-primary" weight="fill" />
        <span>
          Pregunta abierta. Escribe tu respuesta, marca los criterios que cumple y luego
          compara con la respuesta modelo.
        </span>
      </div>

      {questions.map((q, i) => {
        const wrote = hasText(i)
        const total = q.rubric?.length || 0
        const done = checkedCount(i, total)
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-4 mb-3"
          >
            <div className="text-sm font-medium text-text mb-2">{i + 1}. {q.question}</div>
            {q.hint && (
              <div className="flex items-start gap-2 text-xs text-idea bg-idea/10 rounded-xl p-2 mb-2">
                <Lightbulb size={14} className="shrink-0 mt-0.5" weight="fill" />
                <span>{q.hint}</span>
              </div>
            )}
            <textarea
              value={drafts[i] || ''}
              onChange={(e) => setDrafts((d) => ({ ...d, [i]: e.target.value }))}
              placeholder="Escribe tu respuesta aqui..."
              className="input-field w-full min-h-[100px] resize-y text-sm mb-2"
            />
            {q.rubric && q.rubric.length > 0 && (
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[10px] text-text-dim uppercase tracking-wider">
                    Marca los criterios que cumple tu respuesta:
                  </div>
                  <div className="text-[10px] text-text-dim">{done}/{total}</div>
                </div>
                <div className="space-y-1">
                  {q.rubric.map((r, j) => (
                    <label
                      key={j}
                      className={`flex items-center gap-2 text-xs cursor-pointer ${
                        wrote ? 'text-text-muted' : 'text-text-dim/60 cursor-not-allowed'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked.has(`${i}-${j}`)}
                        onChange={() => toggleCheck(i, j)}
                        disabled={!wrote}
                        className="w-3.5 h-3.5 rounded border-primary/30 disabled:opacity-40"
                      />
                      {r}
                    </label>
                  ))}
                </div>
                {!wrote && (
                  <div className="text-[10px] text-text-dim mt-1">
                    Primero escribe tu respuesta para poder marcar los criterios.
                  </div>
                )}
              </div>
            )}
            {q.model && (
              <div className="mt-3">
                {!revealed.has(i) ? (
                  <button
                    onClick={() => toggleReveal(i)}
                    className="text-xs font-medium text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors"
                  >
                    Ver respuesta modelo y compara
                  </button>
                ) : (
                  <div className="text-xs text-success bg-success/10 rounded-xl p-3 mt-1">
                    <div className="font-semibold mb-1 flex items-center gap-1">
                      <CheckCircle size={12} weight="fill" /> Respuesta modelo:
                    </div>
                    {q.model}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
