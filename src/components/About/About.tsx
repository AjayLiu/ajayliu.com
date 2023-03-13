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
                <em>"gratitude is greater than or equal to happiness"</em>
              </p>
            </div>
          </div>
          <div id={styles.aboutAchievements}>
            <Achievement
              link="https://www.cs.ucsb.edu/"
              image="/img/ucsb.png"
              alt="UC Santa Barbara logo"
              description="UC Santa Barbara Computer Science Class of 2026"
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
              description="2022 Taiwanese American Scholarship Fund Awardee"
            />
            <Achievement
              link="https://www.apcf.org/chao-family-foundation-scholarship-open"
              image="/img/chao.png"
              alt="Chao Family Foundation Logo"
              description="2022 Chao Family Foundation Scholarship Awardee"
            />
            <Achievement
              link="https://troygamedev.com/"
              image="/img/gamedev.png"
              alt="game development club logo"
              description="Former President of Game Development Club"
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
              image="/img/dog.svg"
              alt="Dog icon"
              description="I have dog-phobia (please leash your cute doggos)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
