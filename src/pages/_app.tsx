// mantine
import { MantineProvider, Button } from '@mantine/core'

import '../styles/main.scss'
import type { AppProps } from 'next/app'

// redux
import { Provider } from 'react-redux'
import { store } from '../state/store'

// react-query
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { LayoutHome } from '../components/layouts/layouthome/layouthome'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MantineProvider
          theme={{ fontFamily: 'Inter' }}
          withGlobalStyles
          withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
