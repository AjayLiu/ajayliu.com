import Head from 'next/head'
// import Header from '@components/Header'
import Footer from '@components/Footer'
import LandingPage from '@components/LandingPage'
import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'

export default function Home() {
  return (
    <>
    <GoogleAnalyticsHook />
    <div className="container">
      <Head>
        <title>Ajay Liu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="My name is Ajay Liu and I love creating
          things!"
        /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ajay Liu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ajayliu.com/" />
        <meta property="og:image" content="https://ajayliu.com/imgs/ajayliudark.png" />
        <meta property="og:description" content="My name is Ajay Liu and I love creating things!" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head>

      <main>
        <LandingPage />
        <About />
        <Projects />
        <Skills />
        <Contact email="contact@ajayliu.com"/>
      </main>

      <Footer />
    </div>
    </>
  )
}
