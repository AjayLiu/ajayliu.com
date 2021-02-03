import UnityPage from '@components/UnityPage'

const BounceArchitect: React.FC = () => {
    return (
        <UnityPage gameName="Bounce Architect" jsonPath="bouncearchitect/WebGL.json" width="80vw" height="45vw" 
            howTo={<h2>Use A and D or Arrow Keys to move your drawing. Use Mouse to draw. Keep the ball bouncing! </h2>} fullscreenOption 
        />
    )
}

export default BounceArchitect;
