import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { signOut } from 'next-auth/client'

import Scrollbar from 'components/shared/Scrollbar'
import Icon from 'components/shared/Icon'
import { Text } from 'components/shared/Typography'

import Topbar from 'components/layout/Navigation/Topbar'
import Menu from 'components/layout/Navigation/Menu'
import MenuItem from 'components/layout/Navigation/Menu/MenuItem'

import noteitLogo from 'assets/icons/logotype.svg'
import logoutIcon from 'assets/icons/logout.svg'

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ theme }) => theme.navSize.desktop};
  background: ${({ theme }) => theme.colors.element};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 500;
  box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.02);
  z-index: 11;
`

const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  user-select: none;
  align-items: center;
  padding: 5px 15px;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hover};
  margin: 0 20px 20px;
`

const LogoText = styled(Text)`
  font-size: 3rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 14px;
`

const Logout = styled.div`
  padding: 0 20px;
`

const Navigation: React.FC = () => {
  return (
    <>
      <Topbar />
      <Wrapper>
        <Link href="/dashboard" passHref>
          <LogoWrapper>
            <Icon
              size={50}
              excludeDarkMode
              src={noteitLogo}
              alt="noteit logo"
            />
            <LogoText size={300} weight={800}>
              noteIT!
            </LogoText>
          </LogoWrapper>
        </Link>
        <Scrollbar
          scrollbarOnLeft
          styles={{
            width: '100%',
            height: 'calc(100% - 200px)',
            padding: '5px 0',
          }}
        >
          <Menu />
        </Scrollbar>
        <Logout>
          <MenuItem label="Logout" icon={logoutIcon} onClick={signOut} />
        </Logout>
      </Wrapper>
    </>
  )
}

export default Navigation
