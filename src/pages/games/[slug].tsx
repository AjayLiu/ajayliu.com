import UnityPage from '@components/UnityPage';
import {gameList} from "public/games/GameList.js"

interface Props {
    slug: string;
    contentsJSON: string; 
}

const Game: React.FC<Props> = ({slug}) => {
    const props = gameList.find(el => el.slug == slug);
    return (
        <div>
            {/* {slug} */}
            <pre>
                <UnityPage props = {props} />
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
    return {
        props : {
            slug,
        }
    }
}

export default Game;