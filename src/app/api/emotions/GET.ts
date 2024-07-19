import { NextResponse } from 'next/server'
import '@/domain/polyfills'

import { apiMiddleware, responseApiException, responseApiSuccess } from '@/domain/providers/http'
import { getEmotions } from '@/domain/actions/emotions'

export async function GET(req: Request) {
  const res = NextResponse
  const auth = `${req.headers.get('Authorization')}`

  try {
    await apiMiddleware(req, {}, res, {
      authorization: true,
      only: ['GET'],
      authToken: auth,
    })

    return responseApiSuccess(res, {
      content: {
        message: 'Get emotions successfully!',
        emotions: await getEmotions(),
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
