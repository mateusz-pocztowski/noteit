import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import LoadingScreen from 'components/shared/LoadingScreen'
import Navigation from 'components/layout/Navigation'
// import Topbar from 'components/Navigation/Topbar';
// import Tooltip from 'components/Tooltip/Tooltip';
// import { ToastContainer } from 'react-toastify';
// import ConfirmModal from 'components/Modals/ConfirmModal';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: ${({ theme }) => theme.navSize.desktop};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundGradient};
`

const ContentWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 130px 40px 0 60px;
`

const AppLayout: React.FC = ({ children }) => {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const isAppRoute = !['/', '/verify'].includes(router.route)
  if (!loading && !session && isAppRoute) {
    router.push('/')
    return null
  }

  return (
    <>
      <LoadingScreen visible={loading} />
      {!isAppRoute || !session ? (
        <>{children}</>
      ) : (
        <Wrapper>
          <Navigation />
          {session && !loading && <ContentWrapper>{children}</ContentWrapper>}
        </Wrapper>
      )}
    </>
  )
}

export default AppLayout
