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
                src="/img/pfp.png"
                alt="profile picture"
              />
              <p>
                <strong>Ajay Liu</strong>
              </p>
              <p>
                <em>"grateful to be"</em>
              </p>
            </div>
          </div>
          <div id={styles.aboutAchievements}>
            <Achievement
              link="https://www.cs.ucsb.edu/"
              image="/img/ucsb.png"
              alt="UC Santa Barbara logo"
              description="UC Santa Barbara Computer Science 2026 w/ Regents"
            />
            <Achievement
              link="https://www.instagram.com/untitleddanceco"
              image="/img/untitled.jpg"
              alt="Untitled Dance Company Logo"
              description={"Untitled Dance Co. Member"}
            />
            <Achievement
              link="https://snagdelivery.app/"
              image="/img/snag.png"
              alt="snag delivery app logo"
              description="Snag Delivery App Software Engineer Intern"
            />
            <Achievement
              link="https://tascholarshipfund.org/tasf-scholarship-recipients/"
              image="/img/tasf.jpg"
              alt="Taiwanese American Scholarship Fund Logo"
              description="Taiwanese American Scholarship Fund Awardee"
            />
            <Achievement
              link="https://www.apcf.org/chao-family-foundation-scholarship-open"
              image="/img/chao.png"
              alt="Chao Family Foundation Logo"
              description="Chao Family Foundation Scholarship Awardee"
            />
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="Former President of Game Development Club"
            />
            <Achievement
              link="https://www.jheneaiko.com/"
              image="/img/jhene-aiko.png"
              alt="Jhene Aiko icon"
              description="My favorite artist is Jhené Aiko"
            />

            <Achievement
              link="/secret"
              image="/img/rollercoaster.svg"
              alt="Roller coaster icon"
              description="I love roller coasters!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
