import styles from "./SkillPair.module.scss";

interface Props {
  image: string;
  alt: string;
  description: string;
}

const SkillPair: React.FC<Props> = (props) => {
  return (
    <div className={styles.skillPair}>
      <div className={styles.skillImgContainer}>
        <img className={styles.skillImg} src={props.image} alt={props.alt} />
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default SkillPair;
