import React from 'react'
import styled from 'styled-components'
import { signOut } from 'next-auth/client'

import IconButton from 'components/shared/Button/Icon'
import Profile from 'components/layout/AsidePanel/Profile'

import logoutIcon from 'assets/icons/logout.svg'
import { Text } from 'components/shared/Typography'

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${({ theme }) => theme.panelSize.desktop};
  background: ${({ theme }) => theme.colors.element};
  font-family: ${({ theme }) => theme.fonts.secondary};
  box-shadow: -10px 0 5px -2px rgba(0, 0, 0, 0.02);
  z-index: 11;
  padding: 30px 25px;
`

const Flex = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  padding: 0 0 0 10px;
  border-radius: 8px;
  & > div {
    border: none;
    height: 45px;
    pointer-events: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.hover100};
  }
`

const AsidePanel: React.FC = () => {
  return (
    <Wrapper>
      <Flex onClick={() => signOut()}>
        <Text family="secondary" weight={500} themecolor="text">
          Logout
        </Text>
        <IconButton as="div" icon={logoutIcon} />
      </Flex>
      <Profile />
    </Wrapper>
  )
}

export default AsidePanel
