import type { EmotionProps } from './types'

export class Emotion implements EmotionProps {
  id: string
  name: string
  description: string
  emotions: string[]
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  constructor(session: EmotionProps) {
    this.id = session.id
    this.name = session.name
    this.description = session.description
    this.emotions = session.emotions
    this.createdAt = session.createdAt
    this.updatedAt = session.updatedAt
    this.deletedAt = session.deletedAt
  }
}
