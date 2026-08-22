import { useState } from 'react'
import { CaretUp, CaretDown, CheckCircle, XCircle } from '@phosphor-icons/react'

interface SortProps {
  items: string[]
  title?: string
}

export default function SortExercise({ items, title }: SortProps) {
  const [currentOrder, setCurrentOrder] = useState(() => [...items].sort(() => Math.random() - 0.5))
  const [submitted, setSubmitted] = useState(false)
  const isCorrect = submitted && JSON.stringify(currentOrder) === JSON.stringify(items)

  const move = (from: number, dir: -1 | 1) => {
    const to = from + dir
    if (to < 0 || to >= currentOrder.length) return
    const arr = [...currentOrder]
    ;[arr[from], arr[to]] = [arr[to], arr[from]]
    setCurrentOrder(arr)
  }

  return (
    <div className="my-4 glass-card p-5">
      <div className="text-sm font-semibold text-text mb-4">{title || 'Ordena los elementos'}</div>
      <div className="space-y-2">
        {currentOrder.map((item, i) => {
          const isCorrectPos = submitted && item === items[i]
          const isWrongPos = submitted && item !== items[i]
          return (
            <div
              key={i}
              className={`px-4 py-3 flex items-center gap-3 rounded-xl border transition-all ${
                isCorrectPos
                  ? 'bg-success/10 border-success/30'
                  : isWrongPos
                    ? 'bg-danger/10 border-danger/30'
                    : 'glass-card'
              }`}
            >
              {submitted ? (
                isCorrectPos ? (
                  <CheckCircle size={16} className="text-success shrink-0" weight="fill" />
                ) : (
                  <XCircle size={16} className="text-danger shrink-0" weight="fill" />
                )
              ) : (
                <span className="text-xs text-text-dim w-4 text-center">{i + 1}</span>
              )}
              <span className={`flex-1 text-sm ${isCorrectPos ? 'text-success' : isWrongPos ? 'text-danger' : 'text-text-muted'}`}>
                {item}
              </span>
              {!submitted && (
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => move(i, -1)}
                    disabled={i === 0}
                    className="text-text-dim hover:text-text disabled:opacity-30"
                  >
                    <CaretUp size={14} />
                  </button>
                  <button
                    onClick={() => move(i, 1)}
                    disabled={i === currentOrder.length - 1}
                    className="text-text-dim hover:text-text disabled:opacity-30"
                  >
                    <CaretDown size={14} />
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="btn-primary mt-4">
          Verificar orden
        </button>
      ) : (
        <div className="mt-4 flex items-center gap-2">
          {isCorrect ? (
            <div className="text-sm font-medium text-success flex items-center gap-2">
              <CheckCircle size={18} weight="fill" /> ¡Orden correcto!
            </div>
          ) : (
            <div className="text-sm font-medium text-danger flex items-center gap-2">
              <XCircle size={18} weight="fill" /> Orden incorrecto. Intenta de nuevo.
            </div>
          )}
          <button onClick={() => { setCurrentOrder([...items].sort(() => Math.random() - 0.5)); setSubmitted(false) }} className="btn-secondary ml-auto">
            Reintentar
          </button>
        </div>
      )}
    </div>
  )
}
