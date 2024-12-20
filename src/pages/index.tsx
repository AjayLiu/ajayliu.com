import Head from "next/head";
import LandingPage from "@components/LandingPage/LandingPage";
import About from "@components/About/About";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";
import Contact from "@components/Contact/Contact";
import FAQ from "@components/FAQ";
import Layout from "@components/Layout/Layout";
import Script from "next/script";

const Home: React.FC = () => {
  return (
    <Layout title="Ajay Liu">
      <div className="container">
        <Head>
          <title>Ajay Liu - Developer Portfolio</title>
          <meta
            name="description"
            content="Check out all the projects I've worked on!"
            key="desc"
          />
          <meta property="og:title" content="Ajay Liu - Developer Portfolio" />
          <meta
            property="og:description"
            content="Check out all the projects I've worked on!"
          />
          <meta
            property="og:image"
            content="https://ajayliu.com/img/icon.png"
          />
        </Head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />

        <main>
          <LandingPage />
          <About />
          <Skills />
          <Projects />
          <Contact email="contact@ajayliu.com" />
          <FAQ />
          <div style={{ margin: "200px 40px 0px" }}>
            <p>
              psst... there's a secret link you can click somewhere on this page
              ;)
            </p>
            <p>hint: 👋</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
