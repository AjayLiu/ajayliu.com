import Head from "next/head";
import LandingPage from "@components/LandingPage/LandingPage";
import About from "@components/About/About";
import Projects from "@components/Projects/Projects";
import Skills from "@components/Skills/Skills";
import Contact from "@components/Contact/Contact";
import FAQ from "@components/FAQ";
import Layout from "@components/Layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Ajay Liu">
      <div className="container">
        <Head>
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
            <p>hint: my phobia</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
