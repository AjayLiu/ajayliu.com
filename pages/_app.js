import '@styles/globals.css'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

function Application({ Component, pageProps }) {

  useEffect(()=>{
    ReactGA.initialize('UA-178410803-1')
    ReactGA.pageview('/')
  }, [])

  return <Component {...pageProps} />
}

export default Application
