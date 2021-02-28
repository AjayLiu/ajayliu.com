import styles from '@styles/Projects/Projects.module.css'
import ProjectItem from '@components/Projects/ProjectItem'

const Projects: React.FC = () => {
  return (
    <section>
        <h2 className="sectionTitle">Projects</h2>
        <div id = {styles.demoReel}>
        <iframe src="https://www.youtube.com/embed/n_rKZs7hjDI" frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>      
        </div>
        <p style = {{marginBottom:"40px"}}>Click on any of them to play!</p>
        <div id={styles.gallery}>
          <ProjectItem 
            bgImg="imgs/cubeIncWide.PNG"
            gridRow="1/4"
            gridCol="1/4"
            title="Cube Inc." 
            link = "/games/cubeinc" 
            playstoreLink = "https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc"
            description = "A minimalistic, yet challenging puzzle game."
            isRecommended
          />
          <ProjectItem 
            bgImg="imgs/ichiban.png"
            gridRow="1/5"
            gridCol="4/6"
            title="Ichiban" 
            link = "https://ichiban.netlify.app/" 
            playstoreLink="https://play.google.com/store/apps/details?id=com.ichibanreactnative"
            description = "An anime popularity guessing game!"
          />
          <ProjectItem 
            bgImg="imgs/cashOutSkyView.png"
            gridRow="10/12"
            gridCol="4/6"
            title="Cash Out" 
            link = "games/cashout/" 
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopment.CashOut"
            description = "A fast paced police pursuit game."
          />
          <ProjectItem 
            bgImg="imgs/goatsheepbanner.png"
            gridRow="4/7"
            gridCol="3/3"
            title="Sheep or Goat?" 
            link = "https://sheepgoat.herokuapp.com/" 
            description = "Can't tell apart a sheep from a goat? Let the power of machine learning assist you!"
          />
          <ProjectItem 
            bgImg="imgs/pixelbeats.png"
            gridRow="4/8"
            gridCol="1/3"
            title="Pixel Beats" 
            link = "games/pixelbeats/" 
            description = "Are you an artist, musician, or dancer? Tap to the beat and be them all!"
          />
          <ProjectItem 
            bgImg="imgs/whenbanner.jpg"
            gridRow="7/10"
            gridCol = "3/5"
            title="when?"
            link = "https://when.netlify.app/"
            description = "Have a worldwide event? Share a single link to convert that meeting time to everyone's local time!"
          />

          <ProjectItem 
            bgImg="imgs/inspirationcapture.png"
            gridRow="7/10"
            gridCol="5/6"
            title="Inspiration Jar" 
            link = "https://inspirationjar.netlify.app" 
            description = "(no longer supported) A platform for users to submit encouraging messages and make the world a little happier!"
          />
          <ProjectItem 
            bgImg="imgs/bouncebanner.PNG"
            gridRow="5/7"
            gridCol="4/6"
            title="Bounce Architect" 
            link = "games/bouncearchitect/" 
            playstoreLink="https://play.google.com/store/apps/details?id=com.HackathonGroup.BounceArchitect"
            description = "What shape bounces best in all orientations? Sketch it out now! Made in under 12 hours."
          />
          <ProjectItem 
            bgImg="imgs/timerbanner.PNG"
            gridRow="10/12"
            gridCol="3"
            title="10 Second Challenge" 
            link = "https://10seconds.netlify.app/" 
            description = "How well can you count 10 seconds in your head?"
          />
          <ProjectItem 
            bgImg="imgs/TapDefenderBanner.PNG"
            gridRow="8/10"
            gridCol="1"
            title="Tap Defender" 
            link = "games/tapdefender/"
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender" 
            description = "A funny, light-hearted tapping game."
            hardToRead
          />
          <ProjectItem 
            bgImg="imgs/colorjumpwide.png"
            gridRow="8/10"
            gridCol="2/3"
            title="Color Jump" 
            link="games/colorjump"
            playstoreLink="https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump" 
            description = "A color coordination arcade game - easy to learn, hard to master."
            hardToRead
          />
          <ProjectItem 
            bgImg="imgs/triviadashbanner.svg"
            gridRow="10/12"
            gridCol="1/3"
            link="games/triviadash"
            title="Trivia Dash" 
            description = "(work in progress) You're late for school! Study up and avoid the obstacles!"
          />
        </div>
    </section>
  )
}

export default Projects;