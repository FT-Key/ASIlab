import type { ReactNode } from 'react'

interface FieldProps {
  label?: string
  hint?: string
  children: ReactNode
  className?: string
}

function FieldRow({ label, hint, children, className = '' }: FieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-text-muted">{label}</label>
      )}
      {children}
      {hint && <p className="text-[10px] text-text-dim">{hint}</p>}
    </div>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const { label, ...rest } = props
  return (
    <FieldRow label={label}>
      <input {...rest} className="input-field w-full" />
    </FieldRow>
  )
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; hint?: string }) {
  const { label, hint, ...rest } = props
  return (
    <FieldRow label={label} hint={hint}>
      <textarea {...rest} className="input-field w-full min-h-[80px] resize-y" />
    </FieldRow>
  )
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; options: { value: string; label: string }[] }) {
  const { label, options, ...rest } = props
  return (
    <FieldRow label={label}>
      <select {...rest} className="input-field w-full">
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </FieldRow>
  )
}

function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const { label, ...rest } = props
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" {...rest} className="w-4 h-4 rounded border-primary/30 text-primary focus:ring-primary" />
      {label && <span className="text-sm text-text-muted">{label}</span>}
    </label>
  )
}

function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <label className={`block text-xs font-semibold text-text-muted ${className}`}>{children}</label>
}

export { Label, Input, TextArea, Select, Checkbox, FieldRow }
