import { auth, googleAuth } from '@/auth/lucia'
import { OAuthRequestError } from '@lucia-auth/oauth'
import { cookies } from 'next/headers'

import type { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
  const cookieStore = cookies()
  const storedState = cookieStore.get('google_oauth_state')?.value
  const url = new URL(request.url)
  const state = url.searchParams.get('state')
  const code = url.searchParams.get('code')
  // validate state
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    })
  }
  try {
    const { getExistingUser, googleUser, googleTokens, createUser } =
      await googleAuth.validateCallback(code)

    const getUser = async () => {
      const existingUser = await getExistingUser()
      if (existingUser) return existingUser
      const user = await createUser({
        attributes: {
          email: googleUser.email!,
        },
      })
      return user
    }

    const user = await getUser()
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    })
    const authRequest = auth.handleRequest({ request, cookies })
    authRequest.setSession(session)
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', // redirect to profile page
      },
    })
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      })
    }
    return new Response(null, {
      status: 500,
    })
  }
}
