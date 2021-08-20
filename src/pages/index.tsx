import { useEffect } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { getProviders, useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'

import SEO from 'components/shared/SEO'

import Login from 'components/layout/Homepage/Login'
import type { ProviderID, ErrorKey } from 'types/login'

const IndexPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [session] = useSession()
  const router = useRouter()
  const { error } = router.query

  useEffect(() => {
    if (session) router.push('/dashboard')
  }, [session])

  const PROVIDERS = Object.values(providers || {}).map(({ name, id }) => ({
    id: id as ProviderID,
    name: name,
    signIn: (email?: string) => signIn(id, { email }),
  }))

  return (
    <>
      <SEO title="Sign in" />
      <Login providers={PROVIDERS} error={error as ErrorKey} />
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: { providers: await getProviders() },
  }
}

export default IndexPage
