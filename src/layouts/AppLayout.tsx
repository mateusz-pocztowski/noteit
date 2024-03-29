import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import getMotionVariants from 'utils/getMotionVariants'

import LoadingScreen from 'components/shared/LoadingScreen'
import Navigation from 'components/layout/Navigation'
import AsidePanel from 'components/layout/AsidePanel'
import Topbar from 'components/layout/Navigation/Topbar'
import Tooltip from 'components/shared/Tooltip/Tooltip'
import ConfirmModal from 'components/shared/Modals/ConfirmModal'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: ${({ theme }) => theme.navSize.expanded};
  padding-right: ${({ theme }) => theme.panelSize.expanded};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  ${({ theme }) => theme.mq.max.xxxl} {
    padding-left: ${({ theme }) => theme.navSize.closed};
  }
`

const ContentWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 50px 0;
  ${({ theme }) => theme.mq.max.xxxl} {
    padding: 30px 35px 0;
  }
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
          <AsidePanel />
          {session && !loading && (
            <ContentWrapper>
              <Topbar />
              <Tooltip />
              <ConfirmModal />
              <AnimatePresence exitBeforeEnter>
                <motion.section
                  key={router.route}
                  initial="enter"
                  animate="on"
                  exit="exit"
                  variants={getMotionVariants(router.route)}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {children}
                </motion.section>
              </AnimatePresence>
            </ContentWrapper>
          )}
        </Wrapper>
      )}
    </>
  )
}

export default AppLayout
