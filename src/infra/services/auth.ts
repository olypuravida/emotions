import axios from 'axios'
import { MINDFLICS_USERS_URL } from '@/domain/constants/app'

export const verifyAccessToken = async (token: string) => {
  const url = `${MINDFLICS_USERS_URL}/api/auth/verify/token`
  const response = await axios.post(url, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}
