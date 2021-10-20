import { useState } from 'react'
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { Provider } from 'next-auth/client'

import ThemeProvider from 'contexts/ThemeContext'
import ModalProvider from 'contexts/ModalContext'
import TooltipProvider from 'contexts/TooltipContext'

import AppLayout from 'layouts/AppLayout'

import type { AppProps } from 'next/app'

const NProgress = dynamic(() => import('components/shared/NProgress'), {
  ssr: false,
})

const App = ({ Component, pageProps, router }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <ModalProvider>
              <TooltipProvider>
                <NProgress />
                <AppLayout>
                  <Component {...pageProps} key={router.route} />
                </AppLayout>
              </TooltipProvider>
            </ModalProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
