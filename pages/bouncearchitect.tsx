// @ts-nocheck
import UnityPage from '@components/UnityPage'

export default function BounceArchitect() {
    return (
        <UnityPage gameName="Bounce Architect" jsonPath="bouncearchitect/WebGL.json" width="80vw" height="45vw" 
            howTo={<h2>Use A and D or Arrow Keys to move your drawing. Use Mouse to draw. Keep the ball bouncing! </h2>} fullscreenOption 
        />
    )
}