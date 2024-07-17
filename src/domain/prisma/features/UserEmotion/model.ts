import type { UserEmotionProps } from './types'

export class UserEmotion implements UserEmotionProps {
  id: string
  userId: string
  emotionId: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  constructor(user: UserEmotionProps) {
    this.id = user.id
    this.userId = user.userId
    this.emotionId = user.emotionId
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
    this.deletedAt = user.deletedAt
  }
}
