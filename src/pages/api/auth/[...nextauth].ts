import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import Providers from 'next-auth/providers'

import { PrismaClient } from '@prisma/client'
import Adapters from 'next-auth/adapters'

const prisma = new PrismaClient()

const options: NextAuthOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

export default NextAuth(options)
