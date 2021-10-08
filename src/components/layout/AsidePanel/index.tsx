import React from 'react'
import styled from 'styled-components'
import { signOut } from 'next-auth/client'

import IconButton from 'components/shared/Button/Icon'
import Profile from 'components/layout/AsidePanel/Profile'

import logoutIcon from 'assets/icons/logout.svg'

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

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`

const AsidePanel: React.FC = () => {
  return (
    <Wrapper>
      <UserMenu>
        <Profile />
        <IconButton
          icon={logoutIcon}
          onClick={() => signOut()}
          tooltip="Logout"
        />
      </UserMenu>
    </Wrapper>
  )
}

export default AsidePanel
