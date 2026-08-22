import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowDown } from '@phosphor-icons/react'

interface Stage {
  name: string
  description: string
}

const ETL_STAGES: Stage[] = [
  { name: 'Extract', description: 'Extraer datos de fuentes' },
  { name: 'Transform', description: 'Limpiar, validar, unir' },
  { name: 'Load', description: 'Cargar en destino' },
]

const ELT_STAGES: Stage[] = [
  { name: 'Extract', description: 'Extraer datos de fuentes' },
  { name: 'Load', description: 'Cargar sin transformar' },
  { name: 'Transform', description: 'Transformar en el destino' },
]

export default function EtlSimulator({ title }: { title?: string }) {
  const [mode, setMode] = useState<'etl' | 'elt'>('etl')
  const stages = mode === 'etl' ? ETL_STAGES : ELT_STAGES

  return (
    <div className="my-4 glass-card p-5">
      {title && <div className="text-sm font-semibold text-text mb-3">{title}</div>}
      <div className="text-xs text-text-dim mb-4">Comparacion de enfoques de integracion de datos</div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('etl')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            mode === 'etl' ? 'bg-primary text-white' : 'bg-surface-overlay/50 text-text-dim hover:bg-surface-overlay'
          }`}
        >
          ETL
        </button>
        <button
          onClick={() => setMode('elt')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            mode === 'elt' ? 'bg-primary text-white' : 'bg-surface-overlay/50 text-text-dim hover:bg-surface-overlay'
          }`}
        >
          ELT
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {stages.map((stage, i) => (
          <motion.div
            key={`${mode}-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-2"
          >
            <div className="glass-card px-4 py-3 min-w-[100px] text-center">
              <div className="text-xs font-bold text-primary mb-1">{stage.name}</div>
              <div className="text-[10px] text-text-dim">{stage.description}</div>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight size={18} className="text-primary shrink-0 hidden sm:block" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-4 glass-card p-3 text-xs text-text-muted">
        {mode === 'etl' ? (
          <div>
            <span className="font-semibold text-text">ETL</span> transforma los datos <em>antes</em> de cargarlos.
            Ideal cuando se necesita limpiar o unificar datos de multiples fuentes antes del almacenamiento final.
          </div>
        ) : (
          <div>
            <span className="font-semibold text-text">ELT</span> carga los datos <em>sin transformar</em> y luego transforma en el destino.
            Ideal para data lakes y plataformas modernas con mucho poder de procesamiento.
          </div>
        )}
      </div>
    </div>
  )
}
