import type { Emotion as EmotionModel } from '@prisma/client'

export interface EmotionProps extends EmotionModel {
  id: string
  name: string
  description: string
  emotions: string[]
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}
