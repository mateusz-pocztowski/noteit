import styled from 'styled-components'
import { rgba } from 'polished'

import Button from 'components/shared/Button'
import Icon from 'components/shared/Icon'
import { Row, Col } from 'components/shared/Grid'
import { Heading, Text } from 'components/shared/Typography'
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

const Login: React.FC<Props> = ({ error, providers }) => {
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
                <Button onClick={() => signIn()} secondary width="100%">
                  <Icon
                    src={PROVIDERS_LOGOS[id]}
                    excludeDarkMode={id !== 'github'}
                  />
                  <span>Sign in with {name}</span>
                </Button>
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
