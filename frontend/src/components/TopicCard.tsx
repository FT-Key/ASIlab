import { Link } from 'react-router-dom'
import type { Topic } from '../types'
import { getTopicProgress } from '../lib/progress'
import { getTopicIcon } from '../lib/topicIcons'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'motion/react'

interface TopicCardProps {
  topic: Topic
  index?: number
}

const difficultyColor: Record<string, string> = {
  principiante: 'tag-green',
  intermedio: 'tag-yellow',
  avanzado: 'tag-red',
  experto: 'tag-purple',
}

export default function TopicCard({ topic, index = 0 }: TopicCardProps) {
  const progress = getTopicProgress(topic.id, topic.sections.length)
  const Icon = getTopicIcon(topic.emoji)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="h-full"
    >
      <Link
        to={`/topic/${topic.slug}`}
        className="block border-2 border-ink p-5 bg-surface hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-ink)] transition-all group relative overflow-hidden h-full flex flex-col"
      >
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: topic.accent }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-ink flex items-center justify-center shrink-0">
              <Icon size={18} className="text-on-ink" weight="regular" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm text-ink group-hover:text-primary transition-colors leading-tight truncate">
                {topic.title}
              </h3>
              <p className="text-[10px] text-text-dim mt-0.5 truncate font-mono tracking-wider uppercase">{topic.category}</p>
            </div>
          </div>
          <span className={`tag ${difficultyColor[topic.difficulty] || 'tag-purple'} text-[8px] shrink-0`}>
            {topic.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-text-muted line-clamp-2 mb-3 flex-1 leading-relaxed">
          {topic.description}
        </p>

        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {progress === 100 ? (
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-success" weight="fill" />
                <span className="text-[10px] text-success font-mono tracking-wider uppercase font-semibold">Completado</span>
              </div>
            ) : (
              <>
                <div className="w-20 h-2 bg-surface-overlay overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                      background: topic.accent,
                    }}
                  />
                </div>
                <span className="text-[10px] text-text-dim font-mono font-semibold">{progress}%</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 text-[10px] text-text-dim group-hover:text-primary transition-colors font-mono font-semibold tracking-wider uppercase">
            {topic.sections.length} secciones
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Tags */}
        {topic.tags.length > 0 && (
          <div className="flex gap-2 overflow-hidden">
            {topic.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag tag-purple text-[8px] truncate max-w-[100px]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  )
}
