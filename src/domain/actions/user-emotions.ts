import type { Prisma } from '@prisma/client'
import { usePrisma } from '../prisma/hooks'

export const getUserEmotions = async (where?: Prisma.UserEmotionWhereInput) => {
  const { userEmotion } = usePrisma()
  const result = await userEmotion.findMany({ where })
  return result
}

export const getUserEmotion = async (where: Prisma.UserEmotionWhereUniqueInput) => {
  const { userEmotion } = usePrisma()
  const result = await userEmotion.findUnique({ where })
  return result
}

export const createUserEmotion = async (data: Prisma.UserEmotionCreateInput) => {
  const { userEmotion } = usePrisma()
  const result = await userEmotion.create({ data })
  return result
}

export const getOrCreateUserEmotions = async (data: Prisma.UserEmotionCreateInput) => {
  const { userEmotion } = usePrisma()
  const { userId } = data
  const where = { userId } as Prisma.UserEmotionWhereUniqueInput

  const result = await userEmotion.upsert({
    where,
    create: data,
    update: {},
  })
  return result
}

export const updateUserEmotion = async (where: Prisma.UserEmotionWhereUniqueInput, data: Prisma.UserEmotionUpdateInput) => {
  const { userEmotion } = usePrisma()
  const result = await userEmotion.update({ where, data })
  return result
}

export const deleteUserEmotion = async (where: Prisma.UserEmotionWhereUniqueInput) => {
  const { userEmotion } = usePrisma()
  const result = await userEmotion.delete({ where })
  return result
}
