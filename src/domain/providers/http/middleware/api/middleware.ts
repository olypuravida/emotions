import type { NextResponse } from 'next/server'
import type { MethodType } from '../../interfaces/HTTPMethod'

type Response = typeof NextResponse
type Options = {
  authorization?: boolean,
  only?: MethodType[],
  permit?: string[],
  validator?: any,
  authToken?: string,
}

export const apiMiddleware = async (req: Request, params: any, res: Response, opts: Options = {}) => {
  const {
    validateOnlyMethods,
    validateParamsPermitted,
    validateAccessAuthorization,
  } = await import('./extends')
  const {
    authToken,
    authorization,
    only,
    permit,
    validator,
  } = opts

  // Valid required method
  if (!!only && only.length > 0) {
    validateOnlyMethods(req, only)
  }

  // Valid permit params
  if (!!permit && permit.length > 0) {
    await validateParamsPermitted(params, permit)
  }

  // Valid authorization header
  if (authorization) {
    await validateAccessAuthorization(req, authToken)
  }

  // Use custom validator
  if (validator && typeof validator === 'function') {
    await validator(params)
  }
}
