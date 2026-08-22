import type { ProgressData } from '../types'

const STORAGE_KEY = 'admin-si-progress'

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveProgress(data: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function markSectionComplete(topicId: string, sectionId: string) {
  const progress = loadProgress()
  if (!progress[topicId]) {
    progress[topicId] = { completedSections: [] }
  }
  if (!progress[topicId].completedSections.includes(sectionId)) {
    progress[topicId].completedSections.push(sectionId)
  }
  progress[topicId].lastVisited = sectionId
  saveProgress(progress)
  return progress
}

export function saveQuizScore(topicId: string, blockIndex: string, score: number) {
  const progress = loadProgress()
  if (!progress[topicId]) {
    progress[topicId] = { completedSections: [], quizScores: {} }
  }
  if (!progress[topicId].quizScores) {
    progress[topicId].quizScores = {}
  }
  progress[topicId].quizScores[blockIndex] = score
  saveProgress(progress)
  return progress
}

export function getTopicProgress(topicId: string, totalSections: number): number {
  const progress = loadProgress()
  const data = progress[topicId]
  if (!data) return 0
  return Math.round((data.completedSections.length / totalSections) * 100)
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
}
