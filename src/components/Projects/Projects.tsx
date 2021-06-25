import styles from "./Projects.module.scss";
import ProjectItem from "@components/ProjectItem/ProjectItem";

const Projects: React.FC = () => {
  const cubeInc = (
    <ProjectItem
      image="/img/cubeinc.jpg"
      title="Cube Inc. (2019)"
      link="/games/cubeinc"
      githubLink="https://github.com/troygamedev/cubeinc"
      playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc"
      description="A minimalistic, yet challenging puzzle game."
    />
  );
  const inspirationJar = (
    <ProjectItem
      image="/img/inspiration-jar.svg"
      title="Inspiration Jar (2021)"
      link="https://inspiration-jar.ajayliu.com"
      githubLink="https://github.com/AjayLiu/inspiration-jar"
      description="Share words of encouragement to fellow humans around the world!"
    />
  );
  const when = (
    <ProjectItem
      image="/img/when.png"
      title="When? (2021)"
      link="https://when.ajayliu.com/"
      githubLink="https://github.com/AjayLiu/when"
      description="Have a worldwide event? Share a single link to convert that meeting time to everyone's local time!"
    />
  );
  const animeCharacterQuiz = (
    <ProjectItem
      image="/img/anime-character-quiz.svg"
      title="Anime Character Quiz (2021)"
      link="https://anime-character-quiz.ajayliu.com/"
      githubLink="https://github.com/AjayLiu/anime-character-quiz"
      description="Can you tell which anime these characters are from just from a single image?"
    />
  );
  return (
    <section>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.demoReel}>
        <iframe
          src="https://www.youtube.com/embed/n_rKZs7hjDI"
          frameBorder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Top Picks ⭐ </div>
        <div className={styles.galleryRow}>
          {cubeInc} {inspirationJar} {when} {animeCharacterQuiz}
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Website Projects</div>
        <div className={styles.galleryRow}>
          <ProjectItem
            image="/img/bet-you-dont-know-logo.png"
            title="Bet You Don't Know (2021)"
            link="https://bet-you-dont-know.herokuapp.com/"
            githubLink="https://github.com/troygamedev/bet-you-dont-know"
            description="A multiplayer party game of wits, deception, and bets! (2+players)"
          />
          <ProjectItem
            image="/img/logothin.png"
            title="Blog (2021)"
            link="https://blog.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/blog"
            description="My personal blog."
          />
          {inspirationJar}
          {when}
          {animeCharacterQuiz}
          <ProjectItem
            image="/img/ichiban.png"
            title="Ichiban (2021)"
            link="https://ichiban.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/ichiban"
            playstoreLink="https://play.google.com/store/apps/details?id=com.ichibanreactnative"
            description="An anime popularity guessing game!"
          />
          <ProjectItem
            image="/img/sheep.png"
            title="Sheep or Goat? (2020)"
            link="https://sheep-goat.herokuapp.com/"
            githubLink="https://github.com/AjayLiu/sheep-or-goat"
            description="Can't tell apart a sheep from a goat? Let the power of machine learning assist you!"
          />
          <ProjectItem
            image="/img/timerbanner.PNG"
            title="10 Second Challenge (2020)"
            link="https://10seconds.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/10-second-challenge"
            description="How well can you count 10 seconds in your head?"
          />
          <ProjectItem
            image="/img/logothin.png"
            title="AjayLiu.com (2020-)"
            link="https://ajayliu.com/"
            githubLink="https://github.com/AjayLiu/ajayliu.com"
            description="This website."
          />
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Made with Unity</div>
        <div className={styles.galleryRow}>
          <ProjectItem
            image="/img/pixel-beats.png"
            title="Pixel Beats (2020)"
            link="games/pixelbeats/"
            githubLink="https://github.com/troygamedev/pixel-beats"
            description="Tap to the beat and watch as a pixel art emerges!"
          />
          <ProjectItem
            image="/img/bouncebanner.PNG"
            title="Bounce Architect (2020)"
            link="games/bouncearchitect/"
            githubLink="https://github.com/AjayLiu/bounce-architect"
            playstoreLink="https://play.google.com/store/apps/details?id=com.HackathonGroup.BounceArchitect"
            description="What shape bounces best in all orientations? Sketch it out now! Made in under 12 hours."
          />
          <ProjectItem
            image="/img/tap-defender.png"
            title="Tap Defender (2020)"
            link="games/tapdefender/"
            githubLink="https://github.com/troygamedev/tap-defender"
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender"
            description="A funny, light-hearted tapping game."
          />
          <ProjectItem
            image="/img/cashout.jpg"
            title="Cash Out (2019-20)"
            link="games/cashout/"
            githubLink="https://github.com/troygamedev/cashout"
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopment.CashOut"
            description="A fast paced police pursuit game."
          />
          {cubeInc}
          <ProjectItem
            image="/img/colorjumpwide.png"
            title="Color Jump (2018)"
            link="games/colorjump"
            githubLink="https://github.com/AjayLiu/all-unity-games/tree/master/Color%20Jump"
            playstoreLink="https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump"
            description="A color coordination arcade game - easy to learn, hard to master."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
