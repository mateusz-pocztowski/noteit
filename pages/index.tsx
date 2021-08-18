import { useEffect } from 'react'
import { InferGetServerSidePropsType } from 'next'
import { getProviders, signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import styled from 'styled-components'

import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'
import { Row, Col } from 'components/shared/Grid'
import { Text } from 'components/shared/Typography'

import googleIcon from 'assets/icons/google.svg'
import githubIcon from 'assets/icons/github.svg'
import facebookIcon from 'assets/icons/facebook.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.element};
  padding: 2.5rem 4rem 4rem;
`

const getLogo = (provider: string) => {
  switch (provider.toLowerCase()) {
    case 'google':
      return googleIcon
    case 'github':
      return githubIcon
    case 'facebook':
      return facebookIcon
    default:
      return null
  }
}

const IndexPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const [session] = useSession()

  useEffect(() => {
    if (session) router.push('/notes')
  }, [session])

  return (
    <Wrapper>
      <InnerWrapper>
        <Row>
          <Col xs={24}>
            <Text
              as="h2"
              align="center"
              margin="2rem"
              size={26}
              weight={600}
              family="secondary"
            >
              Log into your account
            </Text>
          </Col>
          {Object.values(providers || {}).map(provider => (
            <Col xs={24} key={provider.name}>
              <Button
                onClick={() => signIn(provider.id)}
                secondary
                width="100%"
              >
                <Icon src={getLogo(provider.name)} excludeDarkMode />
                <span>Sign in with {provider.name}</span>
              </Button>
            </Col>
          ))}
        </Row>
      </InnerWrapper>
    </Wrapper>
  )
}

export async function getServerSideProps() {
  return {
    props: { providers: await getProviders() },
  }
}

export default IndexPage
