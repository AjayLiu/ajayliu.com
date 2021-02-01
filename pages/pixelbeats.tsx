import UnityPage from '@components/UnityPage'

export default function PixelBeats() {
    return (
        <>
        <UnityPage gameName="Pixel Beats" jsonPath="pixelbeats/Builds.json" width="80vw" height="45vw" 
            howTo={
            <>
                <h2>Keyboard: WASD to move, pan with arrow keys</h2>
                <h2>Mobile: Swipe to move, pan with two fingers</h2>
                <a style = {{display: "block", marginTop: "30px", color: "blueviolet"}} href= "https://youtu.be/2pLkVAUPByU">
                    Click here for tutorial on the beatmap editor (club members)
                </a>                  
            </>
            } 
            fullscreenOption
        />
        </>
    )
}