import React from 'react'
import styled from 'styled-components'

import Topbar from 'components/layout/Navigation/Topbar'
import Menu from 'components/layout/Navigation/Menu'
import Scrollbar from 'components/shared/Scrollbar'
import Icon from 'components/shared/Icon'

import logoIcon from 'assets/icons/logotype.svg'
import Link from 'next/link'

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
  user-select: none;
  align-items: center;
  padding: 25px 10px;
  height: 100px;
  margin: 0 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hover};
`

const LogoText = styled.span`
  font-size: 3rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 14px;
`

const Navigation = () => {
  return (
    <>
      <Topbar />
      <Wrapper>
        <Link href="/dashboard" passHref>
          <LogoWrapper>
            <Icon size={50} excludeDarkMode src={logoIcon} alt="noteit logo" />
            <LogoText>noteIT!</LogoText>
          </LogoWrapper>
        </Link>
        <Scrollbar
          scrollbarOnLeft
          styles={{
            width: '100%',
            height: 'calc(100% - 100px)',
            padding: '5px 0',
          }}
        >
          <Menu />
        </Scrollbar>
      </Wrapper>
    </>
  )
}

export default Navigation
