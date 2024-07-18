import { verifyAccessToken } from '@/infra/services/auth'
import { UnauthorizedException } from '../../../exceptions/Unauthorized'

const BEARER = 'Bearer'
const MASTER_TOKEN = `${process.env.MASTER_TOKEN}`

export const validateAccessAuthorization = async (req: Request) => {
  const bearerToken = req.headers.get('authorization')
  const isBearer = !!bearerToken?.includes(BEARER)
  const accessToken = bearerToken?.replace(BEARER, '').trim()
  const err = new UnauthorizedException()

  if (!bearerToken) {
    err.setMessage('Authorization header is required')
    throw err
  }
  if (!isBearer) {
    err.setMessage('Authorization header required a Bearer token')
    throw err
  }
  if (!accessToken) {
    err.setMessage('Authorization header required a token')
    throw err
  }

  if (MASTER_TOKEN && accessToken === MASTER_TOKEN) {
    return true
  }

  const { data } = await verifyAccessToken(accessToken)
  if (!data || !data.content?.accessToken) {
    err.setMessage('Invalid access token')
    throw err
  }
}
