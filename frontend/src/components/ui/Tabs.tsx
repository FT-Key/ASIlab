import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

export default function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id)

  return (
    <div>
      <div className="flex gap-1 border-b border-primary/10 mb-4 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
              active === item.id
                ? 'border-primary text-primary'
                : 'border-transparent text-text-dim hover:text-text-muted'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {items.find((i) => i.id === active)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
