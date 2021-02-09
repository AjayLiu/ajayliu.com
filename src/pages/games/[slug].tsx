import UnityPage from '@components/UnityPage';
import {gameList} from "public/games/GameList.js"

interface Props {
    slug: string;
    contentsJSON: string; 
}

const Game: React.FC<Props> = ({slug, contentsJSON}) => {
    const gameProps = JSON.parse(contentsJSON);
    return (
        <div>
            {/* {slug} */}
            <pre>
                <UnityPage props = {gameProps} />
            </pre>
        </div>
    )
}

export const getStaticPaths = async() => {
    const paths = gameList.map(game => ({
        params: {
            slug: game.slug,
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {

    // const contents = JSON.stringify(unitypageObj) ;
    const contentsJSON = JSON.stringify(gameList.find(el => el.slug == slug));

    return {
        props : {
            slug,
            contentsJSON
        }
    }
}

export default Game;