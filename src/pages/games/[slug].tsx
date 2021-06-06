import Layout from "@components/Layout/Layout";
import UnityPage from "@components/UnityPage/UnityPage";
import { gameList } from "public/GameList";

interface Props {
  slug: string;
  contentsJSON: string;
}

const Game: React.FC<Props> = (props) => {
  const {
    gameName,
    height,
    howTo,
    jsonPath,
    slug,
    width,
    fullscreenOption,
    is2018,
    playstoreLink,
  } = gameList.find((el) => el.slug == props.slug);
  return (
    <Layout title={props.slug}>
      <UnityPage
        gameName={gameName}
        height={height}
        howTo={howTo}
        jsonPath={jsonPath}
        slug={slug}
        width={width}
        fullscreenOption={fullscreenOption}
        is2018={is2018}
        playstoreLink={playstoreLink}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = gameList.map((game) => ({
    params: {
      slug: game.slug,
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

export default Game;
