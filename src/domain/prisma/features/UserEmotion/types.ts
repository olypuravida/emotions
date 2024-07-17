import type { UserEmotion as UserEmotionModel } from '@prisma/client'

export interface UserEmotionProps extends UserEmotionModel {
  id: string
  userId: string
  emotionId: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}
