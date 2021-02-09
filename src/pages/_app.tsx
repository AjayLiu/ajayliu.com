import type {AppProps} from 'next/app'

import '@styles/globals.css'
import '@styles/faq.css'
function Application({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default Application
