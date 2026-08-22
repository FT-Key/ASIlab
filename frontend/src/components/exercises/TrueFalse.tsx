import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import type { TrueFalseQuestion } from '../../types'

interface TrueFalseProps {
  questions: TrueFalseQuestion[]
  title?: string
}

export default function TrueFalse({ questions, title }: TrueFalseProps) {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})
  const [showResults, setShowResults] = useState(false)

  const answered = Object.keys(answers).length
  const correct = questions.filter((q, i) => answers[i] === q.answer).length
  const total = questions.length

  return (
    <div className="my-4 glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-text">{title || 'Verdadero o Falso'}</div>
        {showResults && (
          <div className={`tag ${correct === total ? 'tag-green' : 'tag-red'}`}>
            {correct}/{total}
          </div>
        )}
      </div>
      {questions.map((q, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="glass-card p-4 mb-3"
        >
          <div className="text-sm font-medium text-text mb-3">{i + 1}. {q.statement}</div>
          <div className="flex gap-2">
            {[true, false].map((val) => {
              const selected = answers[i] === val
              const showCorrect = showResults && val === q.answer
              const showWrong = showResults && selected && val !== q.answer
              return (
                <button
                  key={String(val)}
                  onClick={() => !showResults && setAnswers((a) => ({ ...a, [i]: val }))}
                  disabled={showResults}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    showCorrect
                      ? 'bg-success/10 border-success/30 text-success'
                      : showWrong
                        ? 'bg-danger/10 border-danger/30 text-danger'
                        : selected
                          ? 'bg-primary/10 border-primary/30 text-primary-dark'
                          : 'bg-surface-raised/50 border-transparent text-text-muted hover:bg-surface-overlay/50'
                  }`}
                >
                  {val ? 'Verdadero' : 'Falso'}
                </button>
              )
            })}
          </div>
          {showResults && (
            <div className="flex items-start gap-2 mt-2">
              {answers[i] === q.answer ? (
                <CheckCircle size={16} className="text-success mt-0.5 shrink-0" weight="fill" />
              ) : (
                <XCircle size={16} className="text-danger mt-0.5 shrink-0" weight="fill" />
              )}
              <div className="text-xs text-text-dim">{q.explanation}</div>
            </div>
          )}
        </motion.div>
      ))}
      {!showResults ? (
        <button
          onClick={() => setShowResults(true)}
          disabled={answered < total}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Verificar respuestas
        </button>
      ) : (
        <button onClick={() => { setAnswers({}); setShowResults(false) }} className="btn-secondary">
          Intentar de nuevo
        </button>
      )}
    </div>
  )
}
