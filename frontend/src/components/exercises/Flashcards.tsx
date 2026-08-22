import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft, ArrowRight, Shuffle } from '@phosphor-icons/react'
import type { Topic, Block } from '../../types'

interface FlashcardsProps {
  topic: Topic
}

export default function Flashcards({ topic }: FlashcardsProps) {
  const cards = useMemo(() => {
    const result: { front: string; back: string }[] = []
    for (const section of topic.sections) {
      for (const block of section.blocks) {
        if (block.type === 'definition') {
          result.push({ front: block.term, back: block.text })
        }
        if (block.type === 'callout' && block.tone === 'idea') {
          result.push({ front: block.title || 'Concepto clave', back: block.text })
        }
      }
    }
    return result
  }, [topic])

  const [order, setOrder] = useState(() => cards.map((_, i) => i))
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const current = cards[order[idx]]

  const shuffle = () => {
    const newOrder = [...order].sort(() => Math.random() - 0.5)
    setOrder(newOrder)
    setIdx(0)
    setFlipped(false)
  }

  const prev = () => { setFlipped(false); setIdx((i) => Math.max(0, i - 1)) }
  const next = () => { setFlipped(false); setIdx((i) => Math.min(order.length - 1, i + 1)) }

  if (cards.length === 0) return null

  return (
    <div className="my-4 glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-text">Flashcards</div>
        <button onClick={shuffle} className="text-xs text-text-dim hover:text-text flex items-center gap-1 transition-colors">
          <Shuffle size={14} /> Barajar
        </button>
      </div>
      <div className="flex items-center justify-center" style={{ perspective: 800 }}>
        <motion.div
          onClick={() => setFlipped((f) => !f)}
          className="w-full max-w-md h-48 cursor-pointer relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6 rounded-xl border border-primary/20 bg-surface-raised/80" style={{ backfaceVisibility: 'hidden' }}>
            <div className="text-sm font-medium text-text text-center">{current?.front}</div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-6 rounded-xl border border-primary/20 bg-primary/5" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="text-sm text-text-muted text-center">{current?.back}</div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button onClick={prev} disabled={idx === 0} className="text-text-dim hover:text-text disabled:opacity-30 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <span className="text-xs text-text-dim">{idx + 1} / {order.length}</span>
        <button onClick={next} disabled={idx === order.length - 1} className="text-text-dim hover:text-text disabled:opacity-30 transition-colors">
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="text-center text-[10px] text-text-dim mt-2">Toca la tarjeta para voltearla</div>
    </div>
  )
}
