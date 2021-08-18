import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const IndexPage = () => {
  const [session] = useSession()

  if (session) {
    // return router.push('/notes')
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">
            Hello, {session?.user?.email ?? session?.user?.name}
          </div>
          <div className="mb-2">gql test query: </div>
          <button className="btn-green" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">You are not logged in!</div>
          <button className="btn-green" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      </div>
    )
  }
}

export default IndexPage
