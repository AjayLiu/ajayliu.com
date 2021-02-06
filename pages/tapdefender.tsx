import UnityPage from '@components/UnityPage'

const TapDefender: React.FC = () => {
    return (
        <>
        <UnityPage gameName="Tap Defender" jsonPath="tapdefender/TapDefenderWebGL.json" width="48vh" height="80vh" playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender"
            howTo={
            <>
                <h2>Tap with mouse or finger</h2>              
            </>
            }             
        />
        </>
    )
}

export default TapDefender;