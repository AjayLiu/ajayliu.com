import styles from "./Projects.module.scss";
import ProjectItem from "@components/ProjectItem/ProjectItem";

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="sectionTitle">Projects</h2>
      <div id={styles.demoReel}>
        <iframe
          src="https://www.youtube.com/embed/n_rKZs7hjDI"
          frameBorder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <p style={{ marginBottom: "40px" }}>Click on any of them to play!</p>
      <div id={styles.gallery}>
        <ProjectItem
          bgImg="imgs/cubeinc.jpg"
          gridRow="1/4"
          gridCol="1/3"
          title="Cube Inc."
          link="/games/cubeinc"
          playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc"
          description="A minimalistic, yet challenging puzzle game."
          isRecommended
        />
        <ProjectItem
          gridRow="1/4"
          gridCol="3/5"
          bgImg="imgs/bet-you-dont-know-logo.png"
          link="https://bet-you-dont-know.herokuapp.com/"
          title="Bet You Don't Know"
          description="A multiplayer game of wits, deception, and bets! (2+players)"
          imgWidth="50%"
          bgColor="#181818"
          hardToRead
        />
        <ProjectItem
          bgImg="imgs/ichiban.jpg"
          gridRow="1/4"
          gridCol="5"
          title="Ichiban"
          link="https://ichiban.ajayliu.com/"
          playstoreLink="https://play.google.com/store/apps/details?id=com.ichibanreactnative"
          description="An anime popularity guessing game!"
        />
        <ProjectItem
          bgImg="imgs/inspirationbanner.png"
          gridRow="4/7"
          gridCol="1/3"
          title="Inspiration Jar"
          link="https://inspiration-jar.ajayliu.com"
          description="Share words of encouragement to fellow humans around the world!"
        />
        <ProjectItem
          bgImg="imgs/when.jpg"
          gridRow="4/7"
          gridCol="3/5"
          title="When?"
          link="https://when.ajayliu.com/"
          description="Have a worldwide event? Share a single link to convert that meeting time to everyone's local time!"
        />
        <ProjectItem
          bgImg="imgs/goatsheepbanner.png"
          gridRow="4/7"
          gridCol="5"
          title="Sheep or Goat?"
          link="https://sheep-goat.herokuapp.com/"
          description="Can't tell apart a sheep from a goat? Let the power of machine learning assist you!"
        />
        <ProjectItem
          bgImg="imgs/anime-character-quiz.svg"
          gridRow="7/9"
          gridCol="1/3"
          bgColor="#b88897"
          title="Anime Character Quiz"
          link="https://anime-character-quiz.ajayliu.com/"
          description="Can you tell which anime these characters are from just from a single image?"
          hardToRead
          imgWidth="50%"
        />
        <ProjectItem
          bgImg="imgs/pixelbeats.png"
          gridRow="7/9"
          gridCol="3/5"
          title="Pixel Beats"
          link="games/pixelbeats/"
          description="Are you an artist, musician, or dancer? Tap to the beat and be them all!"
        />
        <ProjectItem
          bgImg="imgs/bouncebanner.PNG"
          gridRow="7/9"
          gridCol="5"
          title="Bounce Architect"
          link="games/bouncearchitect/"
          playstoreLink="https://play.google.com/store/apps/details?id=com.HackathonGroup.BounceArchitect"
          description="What shape bounces best in all orientations? Sketch it out now! Made in under 12 hours."
        />
        <ProjectItem
          bgImg="imgs/tapdefender.jpg"
          gridRow="9/11"
          gridCol="1"
          title="Tap Defender"
          link="games/tapdefender/"
          playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender"
          description="A funny, light-hearted tapping game."
          hardToRead
        />
        <ProjectItem
          bgImg="imgs/colorjumpwide.png"
          gridRow="9/11"
          gridCol="2"
          title="Color Jump"
          link="games/colorjump"
          playstoreLink="https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump"
          description="A color coordination arcade game - easy to learn, hard to master."
          hardToRead
        />
        <ProjectItem
          bgImg="imgs/timerbanner.PNG"
          gridRow="9/11"
          gridCol="3"
          title="10 Second Challenge"
          link="https://10seconds.ajayliu.com/"
          description="How well can you count 10 seconds in your head?"
        />
        <ProjectItem
          bgImg="imgs/cashout.jpg"
          gridRow="9/11"
          gridCol="4"
          title="Cash Out"
          link="games/cashout/"
          playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopment.CashOut"
          description="A fast paced police pursuit game."
        />
        <ProjectItem
          bgImg="imgs/ajayliudark.png"
          gridRow="9/11"
          gridCol="5"
          link="https://blog.ajayliu.com/"
          title="Blog"
          description="My personal blog."
        />
      </div>
    </section>
  );
};

export default Projects;
