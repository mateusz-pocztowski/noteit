import * as NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface Session {
    id: number
  }
}
