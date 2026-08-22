const API_BASE = '/api'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`API ${res.status}: ${text || res.statusText}`)
  }
  return res.json() as Promise<T>
}

export const api = {
  health: () => request<{ status: string; topics: number }>('/health'),

  topics: () => request<{ topics: any[] }>('/topics'),
  topic: (slug: string) => request<{ topic: any }>(`/topics/${slug}`),
  createTopic: (data: any) => request<{ topic: any }>('/topics', { method: 'POST', body: JSON.stringify(data) }),
  updateTopic: (slug: string, data: any) => request<{ topic: any }>(`/topics/${slug}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteTopic: (slug: string) => request<{ deleted: boolean }>(`/topics/${slug}`, { method: 'DELETE' }),

  sections: (slug: string) => request<{ sections: any[] }>(`/topics/${slug}/sections`),
  addSection: (slug: string, data: any) => request<{ section: any }>(`/topics/${slug}/sections`, { method: 'POST', body: JSON.stringify(data) }),
  updateSection: (slug: string, sectionId: string, data: any) => request<{ section: any }>(`/topics/${slug}/sections/${sectionId}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteSection: (slug: string, sectionId: string) => request<{ deleted: boolean }>(`/topics/${slug}/sections/${sectionId}`, { method: 'DELETE' }),

  blocks: (slug: string, sectionId: string) => request<{ blocks: any[] }>(`/topics/${slug}/sections/${sectionId}/blocks`),
  addBlock: (slug: string, sectionId: string, data: any) => request<{ block: any }>(`/topics/${slug}/sections/${sectionId}/blocks`, { method: 'POST', body: JSON.stringify(data) }),
  updateBlock: (slug: string, sectionId: string, blockIndex: number, data: any) => request<{ block: any }>(`/topics/${slug}/sections/${sectionId}/blocks/${blockIndex}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteBlock: (slug: string, sectionId: string, blockIndex: number) => request<{ deleted: boolean }>(`/topics/${slug}/sections/${sectionId}/blocks/${blockIndex}`, { method: 'DELETE' }),

  glossary: () => request<{ glossary: any[] }>('/glossary'),
  addGlossaryTerm: (data: any) => request<{ term: any }>('/glossary', { method: 'POST', body: JSON.stringify(data) }),
  deleteGlossaryTerm: (term: string) => request<{ deleted: boolean }>(`/glossary/${encodeURIComponent(term)}`, { method: 'DELETE' }),

  categories: () => request<{ categories: any[] }>('/categories'),
}
