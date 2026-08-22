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
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-surface-page/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-display text-lg group-hover:scale-110 transition-transform">
              S
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm tracking-wide text-text">SistemasLab</div>
              <div className="text-[10px] text-text-dim tracking-widest uppercase">Admin SI</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to))
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-primary/15 text-primary-light'
                      : 'text-text-muted hover:text-text hover:bg-surface-raised'
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
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-raised transition-all"
            >
              {mobileOpen ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-primary/10 bg-surface-page/95 backdrop-blur-xl overflow-hidden"
            >
              <nav className="px-4 py-3 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = location.pathname === item.to
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? 'bg-primary/15 text-primary-light'
                          : 'text-text-muted hover:text-text hover:bg-surface-raised'
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

      <main className="flex-1">
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

      <footer className="border-t border-primary/10 bg-surface-page/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-primary/20 flex items-center justify-center text-primary-light font-display text-xs">
                S
              </div>
              <span className="text-sm text-text-dim">SistemasLab — Administracion de Sistemas de Informacion</span>
            </div>
            <div className="text-xs text-text-dim">
              {loading ? 'Cargando contenido...' : `${topics.length} temas disponibles`}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
