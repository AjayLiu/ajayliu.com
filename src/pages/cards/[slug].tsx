import Card from "@components/Card/Card";
import Layout from "@components/Layout/Layout";
import { cardList } from "public/CardList.js";

interface Props {
  slug: string;
  contentsJSON: string;
}

const CardPage: React.FC<Props> = (props) => {
  const propsObj = cardList.find((el) => el.slug == props.slug);
  return (
    <Layout title={propsObj.title}>
      <pre>
        <Card props={propsObj} />
      </pre>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = cardList.map((page) => ({
    params: {
      slug: page.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

export default CardPage;
