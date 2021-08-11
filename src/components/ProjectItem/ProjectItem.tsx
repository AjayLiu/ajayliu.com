import SkillPair from "@components/SkillPair/SkillPair";
import { Skill } from "public/SkillList";
import styles from "./ProjectItem.module.scss";

interface Props {
  title: string;
  description: string;
  image: string;
  link?: string;
  githubLink?: string;
  playstoreLink?: string;
  madeWith: Array<Skill>;
}

const ProjectItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <a
        className={styles.imageAnchor}
        href={props.link || props.playstoreLink}
      >
        <img className={styles.image} src={props.image} />
      </a>
      <div className={styles.text}>
        <strong className={styles.title}>{props.title}</strong>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.madeWithLabel}>Made with: </div>
        <div className={styles.madeWith}>
          {props.madeWith.map((skill, idx) => {
            return <SkillPair skill={skill} key={idx} size="small" />;
          })}
        </div>
      </div>
      <div className={styles.links}>
        {props.link && (
          <a className={styles.link} href={props.link}>
            Click to Try
          </a>
        )}
        {props.githubLink && (
          <a
            className={`${styles.link} ${styles.leftBorder}`}
            href={props.githubLink}
          >
            <img src="/img/github.svg" alt="github logo" height="80%" />
          </a>
        )}
        {props.playstoreLink && (
          <a
            className={`${styles.link} ${styles.leftBorder}`}
            href={props.playstoreLink}
          >
            <img src="/img/playstore.svg" alt="github logo" height="70%" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
