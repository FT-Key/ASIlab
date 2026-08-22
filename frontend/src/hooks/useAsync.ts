import { useState, useEffect } from 'react'

interface AsyncState<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export default function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, error: null, loading: true })

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: true, error: null }))
    fn()
      .then((data) => {
        if (!cancelled) setState({ data, error: null, loading: false })
      })
      .catch((err) => {
        if (!cancelled) setState({ data: null, error: err.message || 'Error', loading: false })
      })
    return () => { cancelled = true }
  }, deps)

  return state
}
