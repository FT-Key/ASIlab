const DANGEROUS_PROTOCOLS = /^\s*(javascript|data|vbscript|blob)\s*:/i

export function sanitizeUrl(url: unknown): string | null {
  if (typeof url !== 'string') return null
  const trimmed = url.trim()
  if (!trimmed) return null
  if (DANGEROUS_PROTOCOLS.test(trimmed)) return null
  try {
    const parsed = new URL(trimmed)
    if (!['http:', 'https:'].includes(parsed.protocol)) return null
    return trimmed
  } catch {
    if (trimmed.startsWith('/') || trimmed.startsWith('#')) return trimmed
    return null
  }
}
