import styled from 'styled-components'
import { signOut } from 'next-auth/client'

import IconButton from 'components/shared/Button/Icon'
import Profile from 'components/layout/AsidePanel/Profile'
import Scrollbar from 'components/shared/Scrollbar'

import logoutIcon from 'assets/icons/logout.svg'

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${({ theme }) => theme.panelSize.expanded};
  background: ${({ theme }) => theme.colors.element};
  font-family: ${({ theme }) => theme.fonts.secondary};
  box-shadow: -10px 0 5px -2px rgba(0, 0, 0, 0.02);
  z-index: 11;
  padding: 2rem 0;
`

const InnerWrapper = styled.div`
  padding: 0 2.5rem 2rem;
`

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`

const AsidePanel: React.FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <UserMenu>
          <Profile />
          <IconButton
            icon={logoutIcon}
            onClick={() => signOut()}
            tooltip="Logout"
          />
        </UserMenu>
      </InnerWrapper>
      <Scrollbar
        styles={{
          width: '100%',
          height: 'calc(100% - 60px)',
          padding: '5px 0',
        }}
      >
        <InnerWrapper id="aside-panel-content" />
      </Scrollbar>
    </Wrapper>
  )
}

export default AsidePanel
