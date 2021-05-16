import Card from "@components/Card/Card";
import Layout from "@components/Layout/Layout";
import { cardList } from "public/cards/CardList.js";

interface Props {
  slug: string;
  contentsJSON: string;
}

const CardPage: React.FC<Props> = ({ slug }) => {
  const props = cardList.find((el) => el.slug == slug);
  return (
    <Layout>
      <pre>
        <Card props={props} />
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
