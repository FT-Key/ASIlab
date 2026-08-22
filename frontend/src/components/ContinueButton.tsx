import { Link } from 'react-router-dom'
import type { Topic } from '../types'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'motion/react'

interface ContinueButtonProps {
  topic: Topic
  lastSection?: string
}

export default function ContinueButton({ topic, lastSection }: ContinueButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card-elevated p-5"
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{topic.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-text-dim uppercase tracking-wider mb-1">Continuar aprendiendo</div>
          <div className="text-sm font-semibold text-text truncate">{topic.title}</div>
          {lastSection && (
            <div className="text-xs text-text-dim mt-0.5 truncate">Ultima vista: {lastSection}</div>
          )}
        </div>
        <Link
          to={`/topic/${topic.slug}`}
          className="btn-primary flex items-center gap-2 shrink-0"
        >
          Continuar
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}
