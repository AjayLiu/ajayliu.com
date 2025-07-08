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
                <em>"Grateful to be."</em>
              </p>
              <p id={styles.aboutBio}>
                <a href="/secret">👋</a> Hi! I’m a fourth-year Computer Science
                undergrad at UCSB specializing in Fullstack Web/App/Game
                Development and DevOps.
                <br />
                Check out my projects below!
              </p>
            </div>
          </div>
          <div id={styles.aboutAchievements}>
            <Achievement
              link="https://www.cs.ucsb.edu/"
              image="/img/appfolio.png"
              alt="AppFolio logo"
              description="AppFolio - Software Engineer Intern (2025)"
            />
            <Achievement
              link="https://www.it.ucsb.edu/it-ucsb/ucsb-it-internship"
              image="/img/ucsb.png"
              alt="UCSB logo"
              description="UCSB IT Internship Program - Web Application Developer (2024 - 2025)"
            />
            <Achievement
              link="https://gdg.community.dev/gdg-on-campus-university-of-california-santa-barbara-santa-barbara-united-states/"
              image="/img/gdg.png"
              alt="Google Developer Group @ UCSB"
              description="Google Developer Group @ UCSB - Director of Instruction (2024 - Present)"
            />
            <Achievement
              link="https://snagdelivery.app/"
              image="/img/snag.png"
              alt="snag delivery app logo"
              description="Snag Delivery App - Software Engineer Intern (2023)"
            />
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="Troy Game Development Club - President (2019-2022)"
            />
            <Achievement
              link="https://www.instagram.com/untitleddanceco"
              image="/img/untitled.jpg"
              alt="Untitled Dance Company Logo"
              description={"Untitled Dance Company - Dancer"}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
