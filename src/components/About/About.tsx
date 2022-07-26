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
                src="/img/pfp.jpg"
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
              link="https://tascholarshipfund.org/tasf-scholarship-recipients/"
              image="/img/tasf.jpg"
              alt="Taiwanese American Scholarship Fund Logo"
              description="2022 Taiwanese American Scholarship Fund Winner"
            />
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="President of Game Development Club"
            />
            <Achievement
              link="https://www.youtube.com/watch?v=-G17cfugcKI&list=PLWHnSaZAUr1E3y2Zb2baYAigJdPPfInXZ&index=3"
              image="/img/dance.svg"
              alt="hip hop dance icon"
              description={"Captain of Troy All Male Dance Team"}
            />
            <Achievement
              link="http://usaco.org/current/data/feb20_bronze_results.html"
              image="/img/silver.svg"
              alt="usaco silver medal"
              description="USACO Silver"
            />
            <Achievement
              link="https://www.apcf.org/chao-family-foundation-scholarship-open"
              image="/img/chao.png"
              alt="Chao Family Foundation Logo"
              description="2022 Chao Family Foundation Scholarship Winner"
            />
            <Achievement
              link="https://play.google.com/store/apps/dev?id=6962993996464856524"
              image="/img/googleplay.svg"
              alt="google play logo"
              description="Released more than 8 games on Google Play"
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
