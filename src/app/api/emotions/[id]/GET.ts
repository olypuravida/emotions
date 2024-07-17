import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const res = NextResponse
  console.log(req)
  return res.json({})
}
