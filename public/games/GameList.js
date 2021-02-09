export const gameList = [
    {
        slug:"cubeinc",
        gameName: "Cube Inc.",
        jsonPath: "../games/cubeinc/Builds.json", 
        width:"48vh",
        height:"80vh",
        playstoreLink:"https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc",
        howTo:<div><h2>Keyboard: WASD to move, pan with arrow keys</h2><h2>Mobile: Swipe to move, pan with two fingers</h2></div>
    },
    {
        slug:"pixelbeats",
        gameName:"Pixel Beats",
        jsonPath:"../games/pixelbeats/Builds.json", 
        width:"80vw",
        height:"48vw",
        howTo: 
        <>
                <h2>Keyboard: WASD to move, pan with arrow keys</h2>
                <h2>Mobile: Swipe to move, pan with two fingers</h2>
                <a style = {{display: "block", marginTop: "30px", color: "blueviolet"}} href= "https://youtu.be/2pLkVAUPByU">
                    Click here for tutorial on the beatmap editor (club members)
                </a>                  
        </>,
        fullscreenOption:true
    },
    {
        slug:"cashout",
        gameName:"Cash Out",
        jsonPath:"cashout/WebGL Jan20.json",
        width:"48vh" ,
        height:"80vh" ,
        playstoreLink:"https://play.google.com/store/apps/details?id=com.TroyGameDevelopment.CashOut",
        howTo:
        
            <>
            <h2>Keyboard: A and D to steer, tap to shoot, F to switch weapons, R to reload</h2>
            <h2>Mobile: Swipe to steer, tap to shoot, swipe the gun icon to switch weapons, tap the gun icon to reload</h2>
            </>
    },
    {
        slug:"colorjump",
        gameName:"Color Jump",
        jsonPath:"colorjump/Ajay Liu Website.json",
        width:"48vh" ,
        height:"80vh" ,
        is2018: true,
        playstoreLink: "https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump",
        howTo:
            <>
                <h2>Jump the platforms and match the colors</h2>
                <h2>Keyboard: A and D to move, Space to change colors</h2>
                <h2>Mobile: Tilt to move, tap to change colors</h2>              
            </>
    },
    {
        slug: "bouncearchitect",
        gameName:"Bounce Architect",
        jsonPath:"bouncearchitect/WebGL.json" ,
        width:"80vw",
        height:"45vw",
        playstoreLink:"https://play.google.com/store/apps/details?id=com.HackathonGroup.BounceArchitect",
        howTo:
        <>
            <h2>Use A and D or Arrow Keys to move your drawing. Use Mouse to draw. Keep the ball bouncing! </h2>
            <div></div>
        </>,
        fullscreenOption: true
    },
    {
        slug: "tapdefender",
        gameName:"Tap Defender" ,
        jsonPath:"tapdefender/TapDefenderWebGL.json",
        width:"48vh" ,
        height:"80vh" ,
        playstoreLink:"https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender",
        howTo:
        <>
            <h2>Tap with mouse or finger</h2>              
            <div></div>
        </>
    }
]
