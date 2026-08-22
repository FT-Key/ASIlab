import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { AppData, Topic, Category, GlossaryTerm } from '../types'

interface TopicContextType {
  topics: Topic[]
  categories: Category[]
  glossary: GlossaryTerm[]
  loading: boolean
  error: string | null
  reload: () => Promise<void>
  getTopicBySlug: (slug: string) => Topic | undefined
}

const TopicContext = createContext<TopicContextType>({
  topics: [],
  categories: [],
  glossary: [],
  loading: true,
  error: null,
  reload: async () => {},
  getTopicBySlug: () => undefined,
})

export function TopicProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/data/topics.json')
      if (!res.ok) throw new Error('No se pudo cargar topics.json')
      const json: AppData = await res.json()
      setData(json)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const getTopicBySlug = (slug: string) => data?.topics.find((t) => t.slug === slug)

  return (
    <TopicContext.Provider
      value={{
        topics: data?.topics ?? [],
        categories: data?.categories ?? [],
        glossary: data?.glossary ?? [],
        loading,
        error,
        reload: load,
        getTopicBySlug,
      }}
    >
      {children}
    </TopicContext.Provider>
  )
}

export const useTopics = () => useContext(TopicContext)
