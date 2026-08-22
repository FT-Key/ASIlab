import { useState, useCallback } from 'react'
import type { Block } from '../types'
import {
  Info,
  CheckCircle,
  Warning,
  XCircle,
  Lightbulb,
  Question,
  Copy,
  Check,
  ArrowRight,
} from '@phosphor-icons/react'

import Quiz from './exercises/Quiz'
import TrueFalse from './exercises/TrueFalse'
import MatchExercise from './exercises/MatchExercise'
import SortExercise from './exercises/SortExercise'
import EssayQuiz from './exercises/EssayQuiz'
import DecisionPath from './exercises/DecisionPath'
import EtlSimulator from './exercises/EtlSimulator'
import OlapPivot from './exercises/OlapPivot'
import LabGuide from './exercises/LabGuide'
import DikwTimeline from './exercises/DikwTimeline'
import ArchDiagram from './ui/ArchDiagram'

const toneConfig: Record<string, { icon: any; bg: string; border: string; text: string }> = {
  info: { icon: Info, bg: 'bg-info/10', border: 'border-info/20', text: 'text-info' },
  success: { icon: CheckCircle, bg: 'bg-success/10', border: 'border-success/20', text: 'text-success' },
  warning: { icon: Warning, bg: 'bg-warning/10', border: 'border-warning/20', text: 'text-warning' },
  danger: { icon: XCircle, bg: 'bg-danger/10', border: 'border-danger/20', text: 'text-danger' },
  idea: { icon: Lightbulb, bg: 'bg-idea/10', border: 'border-idea/20', text: 'text-idea' },
  question: { icon: Question, bg: 'bg-question/10', border: 'border-question/20', text: 'text-question' },
}

interface BlockRendererProps {
  block: Block
  blockIndex?: number
  topicId?: string
}

export default function BlockRenderer({ block, blockIndex = 0, topicId }: BlockRendererProps) {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-text-muted leading-relaxed">{block.text}</p>

    case 'heading':
      return (
        <h3 className="text-lg font-bold text-text mt-6 mb-2">
          {block.text}
        </h3>
      )

    case 'callout': {
      const config = toneConfig[block.tone] || toneConfig.idea
      const Icon = config.icon
      return (
        <div className={`${config.bg} border ${config.border} rounded-xl p-4 my-4`}>
          <div className="flex items-start gap-3">
            <Icon size={20} className={`${config.text} mt-0.5 shrink-0`} weight="fill" />
            <div>
              {block.title && (
                <div className={`font-semibold text-sm ${config.text} mb-1`}>{block.title}</div>
              )}
              <div className="text-sm text-text-muted leading-relaxed">{block.text}</div>
            </div>
          </div>
        </div>
      )
    }

    case 'definition':
      return (
        <div className="glass-card p-4 my-4 border-l-4 border-primary">
          <div className="text-sm font-bold text-primary-dark mb-1">{block.term}</div>
          <div className="text-sm text-text-muted">{block.text}</div>
        </div>
      )

    case 'example':
      return (
        <div className="bg-surface-raised/80 border border-secondary/15 rounded-xl p-4 my-4">
          {block.title && (
            <div className="text-xs font-bold text-secondary-dark uppercase tracking-wider mb-2">
              Ejemplo: {block.title}
            </div>
          )}
          <div className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{block.text}</div>
        </div>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary/30 pl-4 py-2 my-4 italic text-text-muted">
          &ldquo;{block.text}&rdquo;
          {block.author && (
            <div className="text-xs text-text-dim mt-1 not-italic">&mdash; {block.author}</div>
          )}
        </blockquote>
      )

    case 'list':
      return (
        <div className="my-3">
          {block.title && (
            <div className="text-sm font-semibold text-text mb-2">{block.title}</div>
          )}
          {block.ordered ? (
            <ol className="list-decimal list-inside space-y-1 text-sm text-text-muted">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul className="space-y-1 text-sm text-text-muted">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">&#9679;</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )

    case 'table':
      return (
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-primary/15">
                {block.columns.map((col, i) => (
                  <th key={i} className="text-left py-2 px-3 text-xs font-bold text-primary-dark uppercase tracking-wider">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-surface-overlay/30 hover:bg-surface-raised/50 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-text-muted">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'code':
      return <CodeBlock code={block.code} language={block.language} />

    case 'flow':
      return (
        <div className="my-4">
          {block.title && (
            <div className="text-sm font-semibold text-text mb-3">{block.title}</div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {block.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="glass-card px-3 py-2 text-xs font-medium text-text-muted">
                  {step}
                </div>
                {i < block.steps.length - 1 && (
                  <ArrowRight size={16} className="text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      )

    case 'quiz':
      return <Quiz questions={block.questions} title={block.title} slug={topicId} />

    case 'truefalse':
      return <TrueFalse questions={block.tf} title={block.title} />

    case 'essay':
      return <EssayQuiz questions={block.essay} title={block.title} />

    case 'sort':
      return <SortExercise items={block.items} title={block.title} />

    case 'match':
      return <MatchExercise pairs={block.pairs} title={block.title} />

    case 'path':
      return <DecisionPath nodes={block.nodes} title={block.title} />

    case 'pyodide':
      return (
        <div className="my-4 glass-card p-4">
          {block.title && (
            <div className="text-sm font-semibold text-text mb-3">{block.title}</div>
          )}
          <div className="text-xs text-text-dim mb-2">Archivo CSV: {block.pyodide.csv}</div>
          {block.pyodide.code && (
            <CodeBlock code={block.pyodide.code} language="python" />
          )}
          {block.pyodide.questions.map((q, i) => (
            <div key={i} className="text-sm text-text-muted mt-2">
              {i + 1}. {q.question}
            </div>
          ))}
        </div>
      )

    case 'lab':
      return <LabGuide steps={block.lab} title={block.title} />

    case 'pivot':
      return <OlapPivot title={block.title} />

    case 'etl':
      return <EtlSimulator title={block.title} />

    case 'dikw':
      return <DikwTimeline title={block.title} />

    case 'arch':
      return <ArchDiagram kind={block.kind} />

    default:
      return null
  }
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="relative my-3 rounded-xl overflow-hidden border border-primary/10">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-raised border-b border-primary/10">
        <span className="text-[10px] text-text-dim uppercase tracking-wider">{language}</span>
        <button onClick={copy} className="text-text-dim hover:text-text transition-colors">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-text-muted bg-surface-raised">
        <code>{code}</code>
      </pre>
    </div>
  )
}
