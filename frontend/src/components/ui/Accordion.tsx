import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="glass-card overflow-hidden">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
          >
            <span className="text-sm font-medium text-text">{item.title}</span>
            <motion.div
              animate={{ rotate: open === item.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <CaretDown size={16} className="text-text-dim" />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 pb-4 text-sm text-text-muted">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
