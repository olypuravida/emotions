import { NextResponse } from 'next/server'
import '@/domain/polyfills'

import { apiMiddleware, responseApiException, responseApiSuccess } from '@/domain/providers/http'
import { getEmotions } from '@/domain/actions/emotions'

export async function GET(req: Request) {
  const res = NextResponse

  try {
    await apiMiddleware(req, {}, res, {
      authorization: true,
      only: ['GET'],
    })

    const emotions = await getEmotions()

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
