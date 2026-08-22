import { Routes, Route } from 'react-router-dom'
import { TopicProvider } from './lib/topicContext'
import { ThemeProvider } from './lib/theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import RecursosPage from './pages/RecursosPage'
import GlossaryPage from './pages/GlossaryPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import TopicEditor from './pages/admin/TopicEditor'

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
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/topic/:slug" element={<TopicEditor />} />
          </Route>
        </Routes>
      </TopicProvider>
    </ThemeProvider>
  )
}
