'use server'

import type { Prisma } from '@prisma/client'
import { usePrisma } from '../prisma/hooks'

export const getEmotions = async (where?: Prisma.EmotionWhereInput) => {
  const { emotion } = usePrisma()
  const result = await emotion.findMany({ where })
  return result
}

export const getEmotion = async (where: Prisma.EmotionWhereUniqueInput) => {
  const { emotion } = usePrisma()
  const result = await emotion.findUnique({ where })
  return result
}

export const createEmotion = async (data: Prisma.EmotionCreateInput) => {
  const { emotion } = usePrisma()
  const result = await emotion.create({ data })
  return result
}

export const updateEmotion = async (where: Prisma.EmotionWhereUniqueInput, data: Prisma.EmotionUpdateInput) => {
  const { emotion } = usePrisma()
  const result = await emotion.update({ where, data })
  return result
}

export const deleteEmotion = async (where: Prisma.EmotionWhereUniqueInput) => {
  const { emotion } = usePrisma()
  const result = await emotion.delete({ where })
  return result
}
