import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { ArrowClockwise } from '@phosphor-icons/react'

interface DataRow {
  region: string
  category: string
  quarter: string
  sales: number
  units: number
}

const DATA: DataRow[] = [
  { region: 'Norte', category: 'Software', quarter: 'Q1', sales: 45000, units: 120 },
  { region: 'Norte', category: 'Hardware', quarter: 'Q1', sales: 32000, units: 45 },
  { region: 'Sur', category: 'Software', quarter: 'Q1', sales: 38000, units: 95 },
  { region: 'Sur', category: 'Hardware', quarter: 'Q1', sales: 28000, units: 38 },
  { region: 'Norte', category: 'Software', quarter: 'Q2', sales: 52000, units: 140 },
  { region: 'Norte', category: 'Hardware', quarter: 'Q2', sales: 35000, units: 50 },
  { region: 'Sur', category: 'Software', quarter: 'Q2', sales: 41000, units: 105 },
  { region: 'Sur', category: 'Hardware', quarter: 'Q2', sales: 30000, units: 42 },
]

type DimKey = 'region' | 'category' | 'quarter'
type AggFn = 'sum' | 'avg' | 'count'

const COLORS = ['#6C5CE7', '#F7A072', '#10B981', '#3B82F6', '#EF4444', '#8B5CF6']

export default function OlapPivot({ title }: { title?: string }) {
  const [rowDim, setRowDim] = useState<DimKey>('region')
  const [aggFn, setAggFn] = useState<AggFn>('sum')

  const pivotData = useMemo(() => {
    const groups = new Map<string, number[]>()
    for (const row of DATA) {
      const key = row[rowDim]
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key)!.push(row.sales)
    }
    return Array.from(groups.entries()).map(([name, values]) => {
      let value: number
      if (aggFn === 'sum') value = values.reduce((a, b) => a + b, 0)
      else if (aggFn === 'avg') value = Math.round(values.reduce((a, b) => a + b, 0) / values.length)
      else value = values.length
      return { name, value }
    })
  }, [rowDim, aggFn])

  const total = pivotData.reduce((a, b) => a + b.value, 0)

  return (
    <div className="my-4 glass-card p-5">
      {title && <div className="text-sm font-semibold text-text mb-3">{title}</div>}
      <div className="text-xs text-text-dim mb-4">Tabla pivote interactiva: analiza datos de ventas por dimension</div>
      <div className="flex flex-wrap gap-3 mb-4">
        <div>
          <label className="text-[10px] text-text-dim uppercase tracking-wider block mb-1">Dimension</label>
          <select
            value={rowDim}
            onChange={(e) => setRowDim(e.target.value as DimKey)}
            className="input-field text-sm"
          >
            <option value="region">Region</option>
            <option value="category">Categoria</option>
            <option value="quarter">Trimestre</option>
          </select>
        </div>
        <div>
          <label className="text-[10px] text-text-dim uppercase tracking-wider block mb-1">Agregacion</label>
          <select
            value={aggFn}
            onChange={(e) => setAggFn(e.target.value as AggFn)}
            className="input-field text-sm"
          >
            <option value="sum">Suma</option>
            <option value="avg">Promedio</option>
            <option value="count">Conteo</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {pivotData.map((d, i) => (
          <div key={d.name} className="glass-card p-3 text-center">
            <div className="text-xs text-text-dim mb-1">{d.name}</div>
            <div className="text-lg font-bold" style={{ color: COLORS[i % COLORS.length] }}>
              {aggFn === 'sum' ? `$${d.value.toLocaleString()}` : d.value}
            </div>
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={pivotData}>
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {pivotData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-text-dim mt-2 text-right">
        Total: {aggFn === 'sum' ? `$${total.toLocaleString()}` : total}
      </div>
    </div>
  )
}
