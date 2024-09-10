import styles from "./Skills.module.scss";
import SkillPair from "@components/SkillPair/SkillPair";
import skills from "public/SkillList";

const Skills: React.FC = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <h2 className="sectionTitle">I use...</h2>
      <div className={styles.skills}>
        <p className={styles.categoryTitle}>Most experienced:</p>
        <div className={styles.skillBar}>
          {skills
            .filter((skill) => skill.familiarity === 3)
            .map((skill, idx) => (
              <SkillPair skill={skill} key={idx} size="large" />
            ))}
        </div>
        <p className={styles.categoryTitle}>Some experience:</p>
        <div className={styles.skillBar}>
          {skills
            .filter((skill) => skill.familiarity === 2)
            .map((skill, idx) => (
              <SkillPair skill={skill} key={idx} size="large" />
            ))}
        </div>
        <p className={styles.categoryTitle}>A little experience:</p>
        <div className={styles.skillBar}>
          {skills
            .filter((skill) => skill.familiarity === 1)
            .map((skill, idx) => (
              <SkillPair skill={skill} key={idx} size="large" />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
