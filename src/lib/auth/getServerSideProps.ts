import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

const nextAuthGetServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default nextAuthGetServerSideProps
