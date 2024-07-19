import { NextResponse } from 'next/server'
import '@/domain/polyfills'

import { apiMiddleware, responseApiException, responseApiSuccess } from '@/domain/providers/http'
import { getEmotionsByUser } from '@/domain/actions/emotions'

type Params = {
  params: {
    id: string
  }
}

export async function GET(req: Request, { params }: Params) {
  const res = NextResponse
  const { id: userId } = params

  try {
    await apiMiddleware(req, {}, res, {
      authorization: true,
      only: ['GET'],
    })

    const emotions = await getEmotionsByUser(userId)

    return responseApiSuccess(res, {
      content: {
        message: 'Get emotions successfully!',
        emotions,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
