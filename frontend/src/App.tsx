import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { TopicProvider } from './lib/topicContext'
import { ThemeProvider } from './lib/theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import RecursosPage from './pages/RecursosPage'
import GlossaryPage from './pages/GlossaryPage'

// El panel de administracion solo existe en desarrollo. En produccion este
// bloque se elimina del bundle (import.meta.env.DEV === false) y las rutas no
// se registran, por lo que no queda accesible desde el sitio publico.
const AdminDashboard = import.meta.env.DEV
  ? lazy(() => import('./pages/admin/AdminDashboard'))
  : null
const TopicEditor = import.meta.env.DEV
  ? lazy(() => import('./pages/admin/TopicEditor'))
  : null

export default function App() {
  return (
    <ThemeProvider>
      <TopicProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:slug" element={<TopicPage />} />
            <Route path="/recursos" element={<RecursosPage />} />
            <Route path="/glosario" element={<GlossaryPage />} />
            {import.meta.env.DEV && AdminDashboard && (
              <Route path="/admin" element={<AdminDashboard />} />
            )}
            {import.meta.env.DEV && TopicEditor && (
              <Route path="/admin/topic/:slug" element={<TopicEditor />} />
            )}
          </Route>
        </Routes>
      </TopicProvider>
    </ThemeProvider>
  )
}
