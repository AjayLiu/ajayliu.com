import Footer from "@components/Footer/Footer";
import Head from "next/head";

interface Props {
  children;
  title?: string;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
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
          content="https://ajayliu.com/img/ajayliudark.png"
        />
        <meta
          property="og:description"
          content="My name is Ajay Liu and I love creating things!"
        />
      </Head>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
