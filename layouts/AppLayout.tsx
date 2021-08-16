import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Navigation from 'components/Navigation/Navigation';
// import Topbar from 'components/Navigation/Topbar';
// import Tooltip from 'components/Tooltip/Tooltip';
// import { ToastContainer } from 'react-toastify';
// import ConfirmModal from 'components/Modals/ConfirmModal';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: ${({ theme }) => theme.navSize.desktop};
  overflow: hidden;
`

const ContentWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 130px 40px 0 60px;
  background-image: ${({ theme }) => theme.colors.backgroundGradient};
`

const AppLayout: React.FC = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <Wrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  )
}

export default AppLayout
