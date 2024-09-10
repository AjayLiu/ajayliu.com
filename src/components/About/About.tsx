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
                <em>"grateful to be"</em>
              </p>
              <p id={styles.aboutBio}>
                Hi! I’m a third-year Computer Science undergrad at UCSB
                <br />
                specializing in Fullstack Web/App/Game Development.
                <br />
                Check out my projects below!
              </p>
            </div>
          </div>
          <div id={styles.aboutAchievements}>
            <Achievement
              link="https://www.cs.ucsb.edu/"
              image="/img/ucsb-cs.png"
              alt="UC Santa Barbara Computer Science logo"
              description="UC Santa Barbara Computer Science 2026 w/ Regents"
            />
            <Achievement
              link="https://www.it.ucsb.edu/it-ucsb/ucsb-it-internship"
              image="/img/ucsb.png"
              alt="UCSB logo"
              description="UCSB IT Internship Program - Web Application Developer (2024)"
            />
            <Achievement
              link="https://snagdelivery.app/"
              image="/img/snag.png"
              alt="snag delivery app logo"
              description="Snag Delivery App Software Engineer Intern (2023)"
            />
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="President of Troy Game Development Club (2019-22)"
            />
            <Achievement
              link="https://www.instagram.com/untitleddanceco"
              image="/img/untitled.jpg"
              alt="Untitled Dance Company Logo"
              description={"Untitled Dance Co. Member"}
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
              link="/secret"
              image="/img/asl.svg"
              alt="American Sign Language Letter 'a'"
              description="Currently learning American Sign Language"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
