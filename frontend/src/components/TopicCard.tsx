import { Link } from 'react-router-dom'
import type { Topic } from '../types'
import { getTopicProgress } from '../lib/progress'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={`/topic/${topic.slug}`}
        className="block glass-card p-5 hover:border-primary/40 transition-all group relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-1 opacity-60"
          style={{ background: `linear-gradient(90deg, ${topic.accent}, transparent)` }}
        />

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{topic.emoji}</span>
            <div>
              <h3 className="font-semibold text-text group-hover:text-primary-light transition-colors leading-tight">
                {topic.title}
              </h3>
              <p className="text-xs text-text-dim mt-0.5">{topic.category}</p>
            </div>
          </div>
          <span className={`tag ${difficultyColor[topic.difficulty] || 'tag-purple'} text-[10px]`}>
            {topic.difficulty}
          </span>
        </div>

        <p className="text-sm text-text-muted line-clamp-2 mb-4">
          {topic.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {progress === 100 ? (
              <CheckCircle size={16} className="text-success" weight="fill" />
            ) : (
              <div className="w-24 h-1.5 rounded-full bg-surface-overlay overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${topic.accent}, ${topic.accent}88)`,
                  }}
                />
              </div>
            )}
            <span className="text-[10px] text-text-dim">
              {progress === 100 ? 'Completado' : `${progress}%`}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-text-dim group-hover:text-primary-light transition-colors">
            {topic.sections.length} secciones
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {topic.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {topic.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag tag-purple text-[10px]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  )
}
