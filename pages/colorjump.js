import UnityPage from '@components/UnityPage'

export default function ColorJump() {
    return (
        <>
        <UnityPage gameName="Color Jump" jsonPath="colorjump/Ajay Liu Website.json" width="48vh" height="80vh" is2018
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