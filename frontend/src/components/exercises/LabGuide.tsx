import { useState } from 'react'
import { CheckCircle, Copy, Check } from '@phosphor-icons/react'
import type { LabStep } from '../../types'

interface LabGuideProps {
  steps: LabStep[]
  title?: string
}

export default function LabGuide({ steps, title }: LabGuideProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [copied, setCopied] = useState<number | null>(null)

  const toggle = (i: number) => {
    setCompleted((c) => {
      const next = new Set(c)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const copyCommand = (cmd: string, i: number) => {
    navigator.clipboard.writeText(cmd)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  const progress = steps.length > 0 ? Math.round((completed.size / steps.length) * 100) : 0

  return (
    <div className="my-4 glass-card p-5">
      {title && <div className="text-sm font-semibold text-text mb-3">{title}</div>}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-2 bg-surface-overlay/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-[10px] text-text-dim">{completed.size}/{steps.length}</span>
      </div>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`glass-card p-4 transition-all ${
              completed.has(i) ? 'border-success/30 bg-success/5' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => toggle(i)}
                className={`mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  completed.has(i)
                    ? 'bg-success border-success text-white'
                    : 'border-primary/30 hover:border-primary'
                }`}
              >
                {completed.has(i) && <CheckCircle size={12} weight="fill" />}
              </button>
              <div className="flex-1">
                <div className="text-sm font-medium text-text mb-1">Paso {i + 1}: {step.text}</div>
                {step.command && (
                  <div className="relative mt-2">
                    <pre className="bg-surface-raised/80 border border-primary/10 rounded-xl p-3 text-xs font-mono text-text-muted overflow-x-auto">
                      {step.command}
                    </pre>
                    <button
                      onClick={() => copyCommand(step.command!, i)}
                      className="absolute top-2 right-2 text-text-dim hover:text-text transition-colors"
                    >
                      {copied === i ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                )}
                {step.expected && (
                  <div className="text-xs text-success bg-success/10 rounded-xl p-2 mt-2">
                    <span className="font-semibold">Esperado:</span> {step.expected}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
