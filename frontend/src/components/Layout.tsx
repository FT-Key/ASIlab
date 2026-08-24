import { Outlet, Link, useLocation } from 'react-router-dom'
import { useTopics } from '../lib/topicContext'
import {
  House,
  Books,
  Question,
  GearSix,
  List,
  X,
} from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import AdSense from './AdSense'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: House },
  { to: '/recursos', label: 'Recursos', icon: Books },
  { to: '/glosario', label: 'Glosario', icon: Question },
  { to: '/admin', label: 'Admin', icon: GearSix },
]

export default function Layout() {
  const { topics, loading } = useTopics()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-ink flex items-center justify-center text-white font-display text-lg group-hover:bg-primary transition-colors">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm tracking-wide text-text">ASILab</div>
              <div className="text-[10px] text-text-dim tracking-[0.2em] uppercase font-mono">Admin SI</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to))
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all ${
                    active
                      ? 'bg-ink text-white'
                      : 'text-text-muted hover:text-ink hover:bg-surface-overlay'
                  }`}
                >
                  <item.icon size={16} weight={active ? 'fill' : 'regular'} />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-text-muted hover:text-ink hover:bg-surface-overlay transition-all"
            >
              {mobileOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t-2 border-ink bg-white overflow-hidden"
            >
              <nav className="px-6 py-3 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = location.pathname === item.to
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all ${
                        active
                          ? 'bg-ink text-white'
                          : 'text-text-muted hover:text-ink hover:bg-surface-overlay'
                      }`}
                    >
                      <item.icon size={18} weight={active ? 'fill' : 'regular'} />
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex-1 flex">
        {/* Ad sidebar izquierdo */}
        <aside className="hidden xl:block w-64 shrink-0 p-4">
          <div className="sticky top-24">
            <AdSense
              slot="1111111111"
              className="min-h-[600px] border border-gray-200"
            />
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Ad sidebar derecho */}
        <aside className="hidden xl:block w-64 shrink-0 p-4">
          <div className="sticky top-24">
            <AdSense
              slot="2222222222"
              className="min-h-[600px] border border-gray-200"
            />
          </div>
        </aside>
      </div>

      <footer className="border-t-2 border-ink bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ink flex items-center justify-center text-white font-display text-xs">
                A
              </div>
              <span className="text-sm text-text-dim">ASILab — Administracion de Sistemas de Informacion</span>
            </div>
            <div className="text-xs text-text-dim font-mono tracking-wider uppercase">
              {loading ? 'Cargando...' : `${topics.length} temas`}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
