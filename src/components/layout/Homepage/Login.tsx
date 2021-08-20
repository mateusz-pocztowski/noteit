import { useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'
import { Row, Col } from 'components/shared/Grid'
import { Heading, Text } from 'components/shared/Typography'
import Input from 'components/shared/Input'
import {
  Wrapper,
  InnerWrapper,
  Topbar,
  BoxWrapper,
} from 'components/layout/Homepage/shared'

import { LOGIN_ERRORS, PROVIDERS_LOGOS } from 'config'

import type { ErrorKey, ProviderID } from 'types/login'

type Props = {
  error: ErrorKey
  providers: {
    id: ProviderID
    name: string
    signIn: (value?: string) => void
  }[]
}

const Error = styled.div`
  width: 100%;
  border-left: 2px solid ${({ theme }) => theme.colors.red};
  padding: 8px 10px;
  margin: 15px 0.5rem 0;
  background: ${({ theme }) => rgba(String(theme.colors.red), 0.2)};
`

const Spacer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  ${Text} {
    display: block;
    margin: 0 15px;
  }
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.cardBorder};
  }
  & + div {
    margin-bottom: 2rem;
  }
`

const Login: React.FC<Props> = ({ error, providers }) => {
  const [input, setInput] = useState('')
  return (
    <Wrapper>
      <Topbar />
      <InnerWrapper>
        <BoxWrapper>
          <Row>
            <Col xs={24}>
              <Heading>Log into your account</Heading>
            </Col>
            {providers.map(({ id, name, signIn }) => (
              <Col xs={24} key={name}>
                {id === 'email' ? (
                  <>
                    <Spacer>
                      <Text size={14} family="secondary">
                        OR
                      </Text>
                    </Spacer>
                    <Input
                      name="email"
                      label="Your email"
                      placeholder="Type your email..."
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      icon={PROVIDERS_LOGOS.email}
                    />
                    <Button onClick={() => signIn(input)} width="100%">
                      <span>Sign in with {name}</span>
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => signIn()} secondary width="100%">
                    <Icon
                      src={PROVIDERS_LOGOS[id]}
                      excludeDarkMode={id !== 'github'}
                    />
                    <span>Sign in with {name}</span>
                  </Button>
                )}
              </Col>
            ))}
            {error && (
              <Error>
                <Text size={14} line={1.2} weight={500} family="secondary">
                  {LOGIN_ERRORS[error] ?? LOGIN_ERRORS.default}
                </Text>
              </Error>
            )}
          </Row>
        </BoxWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Login
