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
  youtubeLink?: string;
  devpostLink?: string;
  madeWith: Skill[];
  collaborators?: string[];
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
        {props.collaborators && (
          <div>
            <div className={styles.collabLabel}>Collaborators: </div>
            <ul className={styles.collabList}>
              {props.collaborators.map((collaborator, idx) => {
                return (
                  <li key={idx} className={styles.collabItem}>
                    {collaborator}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className={styles.links}>
        {props.link && (
          <a className={styles.link} href={props.link}>
            Demo
          </a>
        )}
        {props.githubLink && (
          <a className={styles.link} href={props.githubLink}>
            <img src="/img/github.svg" alt="github logo" width="40px" />
          </a>
        )}
        {props.playstoreLink && (
          <a className={styles.link} href={props.playstoreLink}>
            <img src="/img/playstore.svg" alt="playstore logo" width="30px" />
          </a>
        )}
        {props.devpostLink && (
          <a className={styles.link} href={props.devpostLink}>
            <img src="/img/devpost.svg" alt="devpost logo" width="35px" />
          </a>
        )}
        {props.youtubeLink && (
          <a className={styles.link} href={props.youtubeLink}>
            <img src="/img/youtube.svg" alt="youtube logo" width="40px" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
