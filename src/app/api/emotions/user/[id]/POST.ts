import { NextResponse } from 'next/server'
import '@/domain/polyfills'

import { apiMiddleware, responseApiException, responseApiSuccess } from '@/domain/providers/http'
import { createEmotion, getEmotionsByUser, updateEmotion } from '@/domain/actions/emotions'
import { createUserEmotion } from '@/domain/actions/user-emotions'

type Params = {
  params: {
    id: string
  }
}

export async function POST(req: Request, { params }: Params) {
  const res = NextResponse
  const { id: userId } = params

  try {
    const body = await req.json()
    const { main, emotion: selected } = body

    await apiMiddleware(req, body, res, {
      authorization: true,
      only: ['POST'],
      permit: ['main', 'emotion'],
    })

    const emotions = await getEmotionsByUser(userId)
    let emotion = emotions.find(e => e.name === main)

    if (!emotion) {
      emotion = await createEmotion({ name: main, emotions: [selected] })
      await createUserEmotion({ emotionId: emotion.id, userId })
    } else {
      if (!emotion.emotions.includes(selected)) {
        emotion = await updateEmotion(
          { id: emotion.id },
          { emotions: [...emotion.emotions, selected] }
        )
      }
    }

    return responseApiSuccess(res, {
      content: {
        message: 'User emotion registered!',
        emotions: await getEmotionsByUser(userId),
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
