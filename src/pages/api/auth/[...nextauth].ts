import NextAuth, { Session } from 'next-auth'
import Providers from 'next-auth/providers'

import { NextApiHandler } from 'next'
import { PrismaClient } from '@prisma/client'
import Adapters from 'next-auth/adapters'

const prisma = new PrismaClient()

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async session(session: Session, token: any) {
      return { ...session, id: token.id }
    },
  },
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
  pages: {
    signIn: '/',
    error: '/',
    verifyRequest: '/verify',
  },
}
