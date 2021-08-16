import { useState } from 'react'
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { Provider } from 'next-auth/client'

import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import ThemeProvider from 'contexts/ThemeContext'
import ModalProvider from 'contexts/ModalContext'
import TooltipProvider from 'contexts/TooltipContext'

import AppLayout from 'layouts/AppLayout'

import type { AppProps } from 'next/app'

const NProgress = dynamic(() => import('components/shared/NProgress'), {
  ssr: false,
})

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const App = ({ Component, pageProps, router }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <ModalProvider>
              <TooltipProvider>
                <Wrapper>
                  <NProgress />
                  <AppLayout>
                    <AnimatePresence exitBeforeEnter>
                      <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                  </AppLayout>
                </Wrapper>
              </TooltipProvider>
            </ModalProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
