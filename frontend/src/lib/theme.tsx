import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = 'asilab-theme'

function readStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme() ?? getSystemTheme())
  const explicit = useRef(readStoredTheme() !== null)

  useEffect(() => {
    applyTheme(theme)
    if (explicit.current) window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      if (!explicit.current) setThemeState(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    explicit.current = true
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    explicit.current = true
    setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
