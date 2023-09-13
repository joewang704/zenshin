import { lucia } from 'lucia'
// Needed for Node <=18
import 'lucia/polyfill/node'
import { nextjs } from 'lucia/middleware'
import { prisma } from '@lucia-auth/adapter-prisma'
import { google } from '@lucia-auth/oauth/providers'
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export const auth = lucia({
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  adapter: prisma(client),
  getUserAttributes: (data) => {
    return {
      email: data.email,
    }
  },
})

const REQUIRED_ENV_VARS = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'AUTH_URL',
]

REQUIRED_ENV_VARS.forEach((k) => {
  if (!process.env[k]) {
    throw new Error(`Auth initialization failed. ${k} env var not set`)
  }
})

export const googleAuth = google(auth, {
  clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
  redirectUri: `${process.env.AUTH_URL}/login/google/callback`,
  scope: ['https://www.googleapis.com/auth/userinfo.email'],
})

export type Auth = typeof auth
