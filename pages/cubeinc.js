import UnityPage from '@components/UnityPage'

export default function CubeInc() {
    return (
        <UnityPage gameName="Cube Inc." jsonPath="cubeinc/Builds.json" width="48vh" height="80vh" 
            howTo={<><h2>Keyboard: WASD to move, pan with arrow keys</h2><h2>Mobile: Swipe to move, pan with two fingers</h2></>} 
        />
    )
}