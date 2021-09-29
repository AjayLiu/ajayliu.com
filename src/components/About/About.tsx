import styles from "./About.module.scss";
import Achievement from "@components/Achievement/Achievement";

const About: React.FC = () => {
  return (
    <section id={styles.aboutSection}>
      <h2 className="sectionTitle">About Me</h2>
      <div id={styles.about}>
        <div id={styles.aboutSplit}>
          <div id={styles.profile}>
            <div>
              <img
                id={styles.aboutImg}
                src="/img/nike-freeze.jpg"
                alt="profile picture"
              />
              <p>
                <strong>Ajay Liu</strong>
              </p>
              <p>
                <em>"You deserve a month-long break 12 times a year!"</em>
              </p>
            </div>
          </div>
          <div id={styles.aboutAchievements}>
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="President of Game Development Club"
            />
            <Achievement
              link="https://www.youtube.com/watch?v=WF0kBV3vVXI"
              image="/img/dance.svg"
              alt="hip hop dance icon"
              description={"Co-Captain of Troy All Male Dance Team"}
            />
            <Achievement
              link="http://usaco.org/current/data/feb20_bronze_results.html"
              image="/img/silver.svg"
              alt="usaco silver medal"
              description="USACO Silver"
            />
            <Achievement
              link="https://play.google.com/store/apps/developer?id=Troy+Game+Development+Club"
              image="/img/googleplay.svg"
              alt="google play logo"
              description="Released more than 8 games on Google Play"
            />
            <Achievement
              link="https://unity.com/"
              image="/img/unity.svg"
              alt="unity logo"
              description="Unity Game Developer"
            />
            <Achievement
              link="https://github.com/AjayLiu"
              image="/img/web.svg"
              alt="web development icon"
              description={
                <>
                  Web Developer<br></br>
                  <em>I coded this website</em>
                </>
              }
            />
            <Achievement
              link="https://www.linkedin.com/in/ajayliu/"
              image="/img/tutor.svg"
              alt="online tutor icon"
              description="Online Tutor"
            />
            <Achievement
              link="/secret"
              image="/img/trilingual.svg"
              alt="multilingual speaker icon"
              description="Trilingual... ok maybe bilingual"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
