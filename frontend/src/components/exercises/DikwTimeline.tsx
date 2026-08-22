import { motion } from 'motion/react'
import { Database, ListNumbers, BookOpen, Lightbulb, Sparkle } from '@phosphor-icons/react'

interface DikwLevel {
  emoji: string
  title: string
  question: string
  text: string
  color: string
  icon: React.ComponentType<any>
}

const LEVELS: DikwLevel[] = [
  { emoji: '📊', title: 'Datos', question: '¿Que son los datos?', text: 'Hechos crudos sin contexto. Numeros, fechas, textos sin procesar. Ejemplo: 42, "lunes", "85%".', color: 'info', icon: Database },
  { emoji: '📋', title: 'Informacion', question: '¿Que es la informacion?', text: 'Datos procesados y organizados que tienen sentido. Ejemplo: "El lunes se vendieron 42 unidades, 85% de la meta."', color: 'primary', icon: ListNumbers },
  { emoji: '📚', title: 'Conocimiento', question: '¿Que es el conocimiento?', text: 'Informacion interpretada con experiencia. Permite tomar decisiones. Ejemplo: "Las ventas caen los lunes, ajustar inventario."', color: 'idea', icon: BookOpen },
  { emoji: '💡', title: 'Comprension', question: '¿Que es la comprension?', text: 'Conocimiento profundo del por que. Entiende patrones y causa-efecto. Ejemplo: "El mercado es estacional porque..."', color: 'warning', icon: Lightbulb },
  { emoji: '✨', title: 'Sabiduria', question: '¿Que es la sabiduria?', text: 'Aplicar comprension para crear valor. Decisiones estrategicas con impacto. Ejemplo: "Invertir en BI para predecir demanda."', color: 'success', icon: Sparkle },
]

export default function DikwTimeline({ title }: { title?: string }) {
  return (
    <div className="my-4 glass-card p-5">
      {title && <div className="text-sm font-semibold text-text mb-4">{title}</div>}
      <div className="text-xs text-text-dim mb-4">Jerarquia del conocimiento: de datos crudos a sabiduria</div>
      <div className="space-y-4">
        {LEVELS.map((level, i) => {
          const Icon = level.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${level.color}/10`}>
                  <Icon size={20} className={`text-${level.color}`} weight="fill" />
                </div>
                {i < LEVELS.length - 1 && (
                  <div className="w-0.5 h-8 bg-primary/10 mt-1" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="text-sm font-bold text-text">{level.emoji} {level.title}</div>
                <div className="text-xs text-primary italic mb-1">{level.question}</div>
                <div className="text-xs text-text-muted leading-relaxed">{level.text}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
