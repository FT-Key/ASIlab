import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, XCircle, ArrowRight } from '@phosphor-icons/react'
import type { QuizQuestion } from '../../types'

interface QuizProps {
  questions: QuizQuestion[]
  title?: string
  slug?: string
}

export default function Quiz({ questions, title, slug }: QuizProps) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const q = questions[current]
  const total = questions.length
  const correct = questions.filter((q, i) => answers[i] === q.answer).length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  const handleAnswer = (idx: number) => {
    setAnswers((a) => ({ ...a, [current]: idx }))
  }

  const next = () => {
    if (current < total - 1) setCurrent((c) => c + 1)
    else setShowResults(true)
  }

  const retry = () => {
    setAnswers({})
    setCurrent(0)
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="my-4 glass-card p-5">
        <div className="text-sm font-semibold text-text mb-2">{title || 'Autoevaluacion'}</div>
        <div className={`text-2xl font-bold mb-3 ${pct >= 70 ? 'text-success' : 'text-danger'}`}>
          {correct}/{total} ({pct}%)
        </div>
        {questions.map((q, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            {answers[i] === q.answer ? (
              <CheckCircle size={18} className="text-success mt-0.5 shrink-0" weight="fill" />
            ) : (
              <XCircle size={18} className="text-danger mt-0.5 shrink-0" weight="fill" />
            )}
            <div className="text-sm text-text-muted">
              <span className="font-medium text-text">{q.question}</span>
              {q.explanation && (
                <div className="text-xs text-text-dim mt-1">{q.explanation}</div>
              )}
            </div>
          </div>
        ))}
        <button onClick={retry} className="btn-secondary mt-3">
          Intentar de nuevo
        </button>
      </div>
    )
  }

  return (
    <div className="my-4 glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-text">{title || 'Autoevaluacion'}</div>
        <div className="tag tag-purple">{current + 1}/{total}</div>
      </div>
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-sm font-medium text-text mb-3">{q.question}</div>
        <div className="space-y-2">
          {q.options.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => handleAnswer(oi)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                answers[current] === oi
                  ? 'bg-primary/10 border-primary/30 text-primary-dark font-medium'
                  : 'bg-surface-raised/50 border-transparent text-text-muted hover:bg-surface-overlay/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </motion.div>
      <button
        onClick={next}
        disabled={answers[current] === undefined}
        className="btn-primary mt-4 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {current < total - 1 ? 'Siguiente' : 'Ver resultados'}
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
