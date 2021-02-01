// @ts-nocheck
import UnityPage from '@components/UnityPage'

export default function TapDefender() {
    return (
        <>
        <UnityPage gameName="Tap Defender" jsonPath="tapdefender/TapDefenderWebGL.json" width="48vh" height="80vh" 
            howTo={
            <>
                <h2>Tap with mouse or finger</h2>              
            </>
            }             
        />
        </>
    )
}