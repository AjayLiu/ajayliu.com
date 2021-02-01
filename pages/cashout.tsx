// @ts-nocheck
import UnityPage from '@components/UnityPage'

export default function CashOut() {
    return (
        <UnityPage gameName="Cash Out" jsonPath="cashout/WebGL Jan20.json" width="48vh" height="80vh" 
            howTo={
            <>
            <h2>Keyboard: A and D to steer, tap to shoot, F to switch weapons, R to reload</h2>
            <h2>Mobile: Swipe to steer, tap to shoot, swipe the gun icon to switch weapons, tap the gun icon to reload</h2>
            </>} 
        />
    )
}