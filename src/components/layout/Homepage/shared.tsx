import styled from 'styled-components'
import Link from 'next/link'

import { Text } from 'components/shared/Typography'
import Icon from 'components/shared/Icon'

import logoIcon from 'assets/icons/logotype.svg'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  overflow-y: auto;
`

export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  min-height: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.colors.element};
  padding: 2.5rem 4rem 4rem;
`

const Logo = styled.a`
  display: none;
  ${({ theme }) => theme.mq.xl} {
    position: absolute;
    top: 3rem;
    left: 3rem;
    height: 60px;
    display: flex;
    align-items: center;
    text-decoration: none;
    @media (min-height: 800px) {
      left: 50%;
      transform: translateX(-50%);
    }
    ${Text} {
      margin-left: 15px;
    }
  }
`

export const Topbar: React.FC = () => (
  <Link href="/" passHref>
    <Logo>
      <Icon size={80} excludeDarkMode src={logoIcon} alt="noteit logo" />
      <Text size={34} weight={700}>
        noteIT
      </Text>
    </Logo>
  </Link>
)
