import UnityPage from '@components/UnityPage'

const ColorJump: React.FC = () => {
    return (
        <>
        <UnityPage gameName="Color Jump" jsonPath="colorjump/Ajay Liu Website.json" width="48vh" height="80vh" is2018 playstoreLink="https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump"
            howTo={
            <>
                <h2>Jump the platforms and match the colors</h2>
                <h2>Keyboard: A and D to move, Space to change colors</h2>
                <h2>Mobile: Tilt to move, tap to change colors</h2>              
            </>
            }             
        />
        </>
    )
}
    
export default ColorJump;