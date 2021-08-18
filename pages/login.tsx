import { InferGetServerSidePropsType } from 'next'
import { getProviders, signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const LogIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const [session] = useSession()

  if (session) {
    return router.push('/notes')
  }

  return (
    <>
      {Object.values(providers || {}).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: { providers: await getProviders() },
  }
}

export default LogIn
