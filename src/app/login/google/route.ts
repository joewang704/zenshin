import { auth, googleAuth } from '@/auth/lucia'
import { cookies } from 'next/headers'

import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
  const [url, state] = await googleAuth.getAuthorizationUrl()
  const cookieStore = cookies()
  // store state
  cookieStore.set('google_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60,
  })
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
    },
  })
}
