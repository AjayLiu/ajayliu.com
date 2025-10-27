import styles from "./Projects.module.scss";
import ProjectItem from "@components/ProjectItem/ProjectItem";
import skills, { Skill } from "public/SkillList";

const Projects: React.FC = () => {
  const findSkillsWithNames = (names: Array<string>) => {
    const arr: Array<Skill> = [];
    names.forEach((name) => {
      const searchedSkill = skills.find((skill) => skill.name === name);
      if (searchedSkill !== undefined) {
        arr.push(searchedSkill);
      }
    });
    return arr;
  };
  const cubeInc = (
    <ProjectItem
      key="cubeInc"
      image="/img/cubeinc.jpg"
      title="Cube Inc. (2019)"
      link="/games/cubeinc"
      githubLink="https://github.com/troygamedev/cubeinc"
      playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopmentClub.CubeInc"
      description="A minimalistic, yet challenging puzzle game. Developed by 30+ members."
      madeWith={findSkillsWithNames(["Unity", "C#"])}
      collaborators={["Troy Game Development Club"]}
    />
  );
  const inspirationJar = (
    <ProjectItem
      key="inspirationJar"
      image="/img/inspiration-jar.svg"
      title="Inspiration Jar (2021)"
      link="https://inspiration-jar.ajayliu.com"
      githubLink="https://github.com/AjayLiu/inspiration-jar"
      description="Share words of encouragement to fellow humans around the world!"
      madeWith={findSkillsWithNames([
        "Next.js",
        "React",
        "SCSS",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Render",
        "Typescript",
      ])}
    />
  );
  const when = (
    <ProjectItem
      key="when"
      image="/img/when.png"
      title="When? (2021)"
      link="https://when.ajayliu.com/"
      githubLink="https://github.com/AjayLiu/when"
      description="Have a worldwide event? Share a single link to convert that meeting time to everyone's local time!"
      madeWith={findSkillsWithNames([
        "Next.js",
        "React",
        "SCSS",
        "Netlify",
        "Typescript",
      ])}
    />
  );
  const animeCharacterQuiz = (
    <ProjectItem
      key="animeCharacterQuiz"
      image="/img/anime-character-quiz.svg"
      title="Anime Character Quiz (2021)"
      link="https://anime-character-quiz.ajayliu.com/"
      githubLink="https://github.com/AjayLiu/anime-character-quiz"
      description="Can you tell which anime these characters are from just from a single image?"
      madeWith={findSkillsWithNames([
        "Gatsby",
        "GraphQL",
        "React",
        "SCSS",
        "Netlify",
        "Typescript",
      ])}
    />
  );
  const notationVisualizer = (
    <ProjectItem
      key="notationVisualizer"
      image="/img/notation-visualizer.svg"
      title="Notation Visualizer (2022)"
      link="http://notation-visualizer.ajayliu.com/"
      githubLink="https://github.com/AjayLiu/notation-visualizer"
      youtubeLink="https://www.youtube.com/watch?v=3RhLATMb7OI"
      description="An interactive website to visualize how Infix, Prefix (Polish), and Postfix (Reverse Polish) notation are converted and evaluated. Visited by 6900+ users."
      madeWith={findSkillsWithNames([
        "Next.js",
        "TailwindCSS",
        "React",
        "Netlify",
        "Typescript",
      ])}
      collaborators={["Антон Ведерников"]}
    />
  );
  const verde = (
    <ProjectItem
      key="verde"
      image="/img/verde.png"
      title="🏆 Verde (2023)"
      githubLink="https://github.com/AjayLiu/verde"
      youtubeLink="https://www.youtube.com/watch?v=o1LMi6rVhtw"
      description="A social media app where users upload photos of themselves completing fun sustainability challenges! Won 1st at UCSB's GDSC Solution Challenge."
      madeWith={findSkillsWithNames(["React Native", "Typescript", "Firebase"])}
      collaborators={["Rohil Shah", "Will Corcoran", "Nikhil Vyas"]}
    />
  );
  const graticat = (
    <ProjectItem
      key="graticat"
      image="/img/graticat.png"
      title="🏅 GratiCat (2023)"
      devpostLink="https://devpost.com/software/graticat"
      youtubeLink="https://www.youtube.com/watch?v=8OnUD35byNw"
      githubLink="https://github.com/AjayLiu/GratiCat"
      description=" Help GratiCat fill his coffee by practicing gratitude every day! 
	   Won Top 5 Overall at SB Hacks IX."
      madeWith={findSkillsWithNames(["React Native", "Typescript", "Firebase"])}
      collaborators={["Isaiah Garcia", "Kevin Zhang", "Victor Prchlik"]}
    />
  );
  const yapmaps = (
    <ProjectItem
      key="yapmaps"
      image="/img/yapmaps.png"
      title="YapMaps (2025)"
      link="https://yapmaps.vercel.app/"
      githubLink="https://github.com/bsen1/team-sendy"
      description="Won 1st Overall at Unwrapathon 2025. An NLP-powered map visualizing trending campus discussions across U.S. universities. "
      madeWith={findSkillsWithNames([
        "Python",
        "Next.js",
        "React",
        "TypeScript",
      ])}
    />
  );

  return (
    <section style={{ marginTop: "100px" }}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.demoReel}>
        <iframe
          src="https://www.youtube.com/embed/I2y8RWBl9Do"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Top Picks ⭐ </div>
        <div className={styles.galleryRow}>
          {yapmaps}
          {notationVisualizer}
          {animeCharacterQuiz}
          {cubeInc}
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Research</div>
        <div className={styles.galleryRow}>
          <ProjectItem
            key="ersp"
            image="/img/ersp.png"
            title="Early Research Scholars Program (2023-24)"
            link="/poster.pdf"
            githubLink="https://github.com/Helen123/userwesite_ersp"
            youtubeLink="https://www.youtube.com/watch?v=VkVKGskg0zE"
            description="Conducted trials on 20+ human subjects with UCSB's Four Eyes Lab to study the effectiveness of GPT-4 on memory tasks."
            madeWith={findSkillsWithNames(["React", "Typescript"])}
            collaborators={[
              "Prof. Tobias Hollerer",
              "Radha Kumaran",
              "Alex Rich",
              "Qi Wu",
              "Towela Phiri",
              "Frank Zhong",
            ]}
          />
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Website Projects</div>
        <div className={styles.galleryRow}>
          {yapmaps}
          {notationVisualizer}
          <ProjectItem
            key="betYouDontKnow"
            image="/img/bet-you-dont-know-logo.png"
            title="Bet You Don't Know (2021)"
            link="https://bet-you-dont-know.ajayliu.com/"
            githubLink="https://github.com/troygamedev/bet-you-dont-know"
            description="A multiplayer party game of wits, deception, and bets! (2+players)"
            madeWith={findSkillsWithNames([
              "Next.js",
              "React",
              "SCSS",
              "Socket.io",
              "Express.js",
              "Node.js",
              "Netlify",
              "Typescript",
              "Render",
            ])}
            collaborators={["Troy Game Development Club"]}
          />
          <ProjectItem
            key="blog"
            image="/img/logothin.png"
            title="Blog (2021)"
            link="https://blog.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/blog"
            description="My personal blog."
            madeWith={findSkillsWithNames([
              "Gatsby",
              "React",
              "NetlifyCMS",
              "Netlify",
              "Typescript",
            ])}
          />
          {inspirationJar}
          {when}
          {animeCharacterQuiz}
          <ProjectItem
            key="ichiban"
            image="/img/ichiban.png"
            title="Ichiban (2021)"
            link="https://ichiban.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/ichiban"
            description="An anime popularity guessing game!"
            madeWith={findSkillsWithNames([
              "Next.js",
              "React",
              "SCSS",
              "Netlify",
              "Javascript",
            ])}
          />
          <ProjectItem
            key="sheepOrGoat"
            image="/img/sheep.png"
            title="Sheep or Goat? (2020)"
            link="https://sheep-goat.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/sheep-or-goat"
            description="Can't tell apart a sheep from a goat? Let the power of machine learning assist you!"
            madeWith={findSkillsWithNames(["Fast.ai", "Python", "Render"])}
          />
          <ProjectItem
            key="10secondchallenge"
            image="/img/timerbanner.PNG"
            title="10 Second Challenge (2020)"
            link="https://10seconds.ajayliu.com/"
            githubLink="https://github.com/AjayLiu/10-second-challenge"
            description="How well can you count 10 seconds in your head?"
            madeWith={findSkillsWithNames(["React", "Netlify", "Javascript"])}
          />
          <ProjectItem
            key="ajayliu.com"
            image="/img/icon-round.png"
            title="AjayLiu.com (2020-)"
            link="https://ajayliu.com/"
            githubLink="https://github.com/AjayLiu/ajayliu.com"
            description="This website."
            madeWith={findSkillsWithNames([
              "Next.js",
              "React",
              "SCSS",
              "Netlify",
              "Typescript",
            ])}
          />
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Mobile Apps</div>
        <div className={styles.galleryRow}>
          {graticat}
          {verde}
          <ProjectItem
            key="ichibanReactNative"
            image="/img/ichiban.png"
            title="Ichiban, App Version (2021)"
            githubLink="https://github.com/AjayLiu/ichiban-react-native"
            playstoreLink="https://play.google.com/store/apps/details?id=com.ichibanreactnative"
            description="An anime popularity guessing game!"
            madeWith={findSkillsWithNames(["React Native", "Javascript"])}
          />
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryTitle}>Games Made with Unity</div>
        <div className={styles.galleryRow}>
          <ProjectItem
            key="pixelBeats"
            image="/img/pixel-beats.png"
            title="Pixel Beats (2020)"
            link="games/pixelbeats/"
            githubLink="https://github.com/troygamedev/pixel-beats"
            description="Tap to the beat and watch as a pixel art emerges!"
            madeWith={findSkillsWithNames(["Unity", "C#"])}
            collaborators={["Troy Game Development Club"]}
          />
          <ProjectItem
            key="bouncearchitect"
            image="/img/bouncebanner.PNG"
            title="Bounce Architect (2020)"
            link="games/bouncearchitect/"
            devpostLink="https://devpost.com/software/bouncearchitect"
            githubLink="https://github.com/AjayLiu/bounce-architect"
            playstoreLink="https://play.google.com/store/apps/details?id=com.HackathonGroup.BounceArchitect"
            description="What shape bounces best in all orientations? Sketch it out now! Made in under 12 hours."
            madeWith={findSkillsWithNames(["Unity", "C#"])}
            collaborators={["Talha Ahmed", "Robin Jiang", "Hyunsoo Cho"]}
          />
          <ProjectItem
            key="tapDefender"
            image="/img/tap-defender.png"
            title="Tap Defender (2020)"
            link="games/tapdefender/"
            githubLink="https://github.com/troygamedev/tap-defender"
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDev.TapDefender"
            description="A funny, light-hearted tapping game."
            madeWith={findSkillsWithNames(["Unity", "C#"])}
            collaborators={["Troy Game Development Club"]}
          />
          <ProjectItem
            key="cashout"
            image="/img/cashout.jpg"
            title="Cash Out (2019-20)"
            link="games/cashout/"
            githubLink="https://github.com/troygamedev/cashout"
            playstoreLink="https://play.google.com/store/apps/details?id=com.TroyGameDevelopment.CashOut"
            description="A fast paced police pursuit game."
            madeWith={findSkillsWithNames(["Unity", "C#"])}
            collaborators={["Troy Game Development Club"]}
          />
          {cubeInc}
          <ProjectItem
            key="colorjump"
            image="/img/colorjumpwide.png"
            title="Color Jump (2018)"
            link="games/colorjump"
            githubLink="https://github.com/AjayLiu/all-unity-games/tree/master/Color%20Jump"
            playstoreLink="https://play.google.com/store/apps/details?id=com.MerbolaGames.ColorJump"
            description="A color coordination arcade game - easy to learn, hard to master."
            madeWith={findSkillsWithNames(["Unity", "C#"])}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
