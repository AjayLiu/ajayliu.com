import UnityPage from '@components/UnityPage';

interface Props {
    slug: string;
    contentsJSON: string; 
}

const Game: React.FC<Props> = ({slug, contentsJSON}) => {
    const gameProps = JSON.parse(contentsJSON);
    return (
        <div>
            {slug}
            <pre>
                <UnityPage props = {gameProps} />
            </pre>
        </div>
    )
}

const gameList = [
    {
        slug:"cubeinc",
        gameName:"Cube Inc.",
        jsonPath:"games/cubeinc/Builds.json", 
        width:"48vh",
        height:"80vh",
        playstoreLink:"https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc",
        howTo:<div><h2>Keyboard: WASD to move, pan with arrow keys</h2><h2>Mobile: Swipe to move, pan with two fingers</h2></div>
    },
    {
        slug:"pixelbeats",
        gameName:"Pixel Beats",
        jsonPath:"games/pixelbeats/Builds.json", 
        width:"80vw",
        height:"48vw",
        howTo:<div><h2>Keyboard: WASD to move, pan with arrow keys</h2><h2>Mobile: Swipe to move, pan with two fingers</h2></div>,
        fullscreenOption:true
    }
]


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