import React from 'react'
import { motion } from 'motion/react'

interface ArchDiagramProps {
  kind?: string
}

function Box({ x, y, w, h, label, color = 'primary' }: { x: number; y: number; w: number; h: number; label: string; color?: string }) {
  return (
    <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={`var(--color-${color})`} fillOpacity={0.1} stroke={`var(--color-${color})`} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className="text-[11px] font-medium" fill="var(--color-text)">{label}</text>
    </motion.g>
  )
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-primary)" strokeWidth={1.5} strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
  )
}

function GobiernoTI() {
  return (
    <svg viewBox="0 0 400 220" className="w-full">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="var(--color-primary)" />
        </marker>
      </defs>
      <Box x={140} y={10} w={120} h={35} label="Estrategia TI" />
      <Box x={40} y={80} w={100} h={30} label="COBIT" />
      <Box x={160} y={80} w={80} h={30} label="ITIL" />
      <Box x={260} y={80} w={100} h={30} label="ISO 38500" />
      <Arrow x1={200} y1={45} x2={90} y2={80} />
      <Arrow x1={200} y1={45} x2={200} y2={80} />
      <Arrow x1={200} y1={45} x2={310} y2={80} />
      <Box x={30} y={140} w={120} h={30} label="Procesos TI" />
      <Box x={170} y={140} w={100} h={30} label="Servicios" />
      <Box x={290} y={140} w={90} h={30} label="Compliance" />
      <Arrow x1={90} y1={110} x2={90} y2={140} />
      <Arrow x1={200} y1={110} x2={220} y2={140} />
      <Arrow x1={310} y1={110} x2={335} y2={140} />
      <Box x={100} y={190} w={200} h={28} label="Valor de Negocio" color="secondary" />
    </svg>
  )
}

function ERPA() {
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="var(--color-primary)" />
        </marker>
      </defs>
      <Box x={120} y={10} w={160} h={30} label="ERP Central" color="primary" />
      <Box x={10} y={70} w={80} h={28} label="Finanzas" />
      <Box x={100} y={70} w={80} h={28} label="RRHH" />
      <Box x={190} y={70} w={90} h={28} label="Produccion" />
      <Box x={290} y={70} w={80} h={28} label="Ventas" />
      <Arrow x1={200} y1={40} x2={50} y2={70} />
      <Arrow x1={200} y1={40} x2={140} y2={70} />
      <Arrow x1={200} y1={40} x2={235} y2={70} />
      <Arrow x1={200} y1={40} x2={330} y2={70} />
      <Box x={50} y={130} w={120} h={28} label="CRM" color="secondary" />
      <Box x={230} y={130} w={120} h={28} label="BI / Reportes" color="secondary" />
      <Arrow x1={110} y1={98} x2={110} y2={130} />
      <Arrow x1={290} y1={98} x2={290} y2={130} />
    </svg>
  )
}

function ITILLifecycle() {
  return (
    <svg viewBox="0 0 400 200" className="w-full">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="var(--color-primary)" />
        </marker>
      </defs>
      <Box x={150} y={10} w={100} h={28} label="Planificar" />
      <Box x={300} y={50} w={90} h={28} label="Convertir" />
      <Box x={300} y={120} w={90} h={28} label="Operar" />
      <Box x={150} y={160} w={100} h={28} label="Mejorar" />
      <Box x={10} y={85} w={100} h={28} label="Servizio" color="secondary" />
      <Arrow x1={250} y1={38} x2={300} y2={55} />
      <Arrow x1={345} y1={78} x2={345} y2={120} />
      <Arrow x1={300} y1={148} x2={250} y2={168} />
      <Arrow x1={150} y1={175} x2={60} y2={113} />
      <Arrow x1={60} y1={85} x2={150} y2={38} />
    </svg>
  )
}

const diagrams: Record<string, () => React.JSX.Element> = {
  'gobierno-ti': GobiernoTI,
  'erp-arquitectura': ERPA,
  'itil-lifecycle': ITILLifecycle,
}

export default function ArchDiagram({ kind = 'gobierno-ti' }: ArchDiagramProps) {
  const Diagram = diagrams[kind] || GobiernoTI
  return (
    <div className="my-4 glass-card p-4">
      <div className="text-xs text-text-dim mb-2 uppercase tracking-wider">Diagrama de Arquitectura</div>
      <Diagram />
    </div>
  )
}
