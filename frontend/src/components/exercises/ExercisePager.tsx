import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle, ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import type { Block } from '../../types'
import Quiz from './Quiz'
import TrueFalse from './TrueFalse'
import MatchExercise from './MatchExercise'
import SortExercise from './SortExercise'
import EssayQuiz from './EssayQuiz'
import DecisionPath from './DecisionPath'

interface ExercisePagerProps {
  blocks: Block[]
  title?: string
}

const EXERCISE_TYPES = ['quiz', 'truefalse', 'match', 'sort', 'essay', 'path'] as const

export default function ExercisePager({ blocks, title }: ExercisePagerProps) {
  const exercises = blocks.filter((b) => (EXERCISE_TYPES as readonly string[]).includes(b.type))
  const [current, setCurrent] = useState(0)

  if (exercises.length === 0) return null

  const renderExercise = (block: Block) => {
    switch (block.type) {
      case 'quiz': return <Quiz questions={block.questions} title={block.title} />
      case 'truefalse': return <TrueFalse questions={block.tf} title={block.title} />
      case 'match': return <MatchExercise pairs={block.pairs} title={block.title} />
      case 'sort': return <SortExercise items={block.items} title={block.title} />
      case 'essay': return <EssayQuiz questions={block.essay} title={block.title} />
      case 'path': return <DecisionPath nodes={block.nodes} title={block.title} />
      default: return null
    }
  }

  return (
    <div className="my-6">
      {title && <div className="text-sm font-semibold text-text mb-3">{title}</div>}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
        {exercises.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-8 rounded-lg text-xs font-medium flex items-center justify-center shrink-0 transition-all ${
              i === current
                ? 'bg-primary text-white'
                : 'bg-surface-overlay/50 text-text-dim hover:bg-surface-overlay'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {renderExercise(exercises[current])}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="text-text-dim hover:text-text disabled:opacity-30 flex items-center gap-1 text-sm transition-colors"
        >
          <ArrowLeft size={16} /> Anterior
        </button>
        <span className="text-xs text-text-dim">{current + 1} / {exercises.length}</span>
        <button
          onClick={() => setCurrent((c) => Math.min(exercises.length - 1, c + 1))}
          disabled={current === exercises.length - 1}
          className="text-text-dim hover:text-text disabled:opacity-30 flex items-center gap-1 text-sm transition-colors"
        >
          Siguiente <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
