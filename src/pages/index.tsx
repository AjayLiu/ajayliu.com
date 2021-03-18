import Head from "next/head";
// import Header from '@components/Header'
import Footer from "@components/Footer/Footer";
import LandingPage from "@components/LandingPage/LandingPage";
import About from "@components/About/About";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";
import Contact from "@components/Contact/Contact";
import FAQ from "@components/FAQ";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";

const Home: React.FC = () => {
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
          <meta
            property="og:image"
            content="https://ajayliu.com/imgs/ajayliudark.png"
          />
          <meta
            property="og:description"
            content="My name is Ajay Liu and I love creating things!"
          />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        </Head>

        <main>
          <LandingPage />
          <About />
          <Projects />
          <Skills />
          <Contact email="contact@ajayliu.com" />
          <FAQ />
          <div style={{ margin: "100px 40px 0px", fontStyle: "italic" }}>
            <p>
              psst... there's a secret link you can click somewhere on this page
              ;)
            </p>
            <p>hint: i wonder how many languages you can speak</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
