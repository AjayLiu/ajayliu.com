import styles from "@styles/Skills/SkillPair.module.css";

interface Props {
  image: string;
  alt: string;
  description: string;
}

const SkillPair: React.FC<Props> = ({ image, alt, description }) => {
  return (
    <div className={styles.skillPair}>
      <div className={styles.skillImgContainer}>
        <img className={styles.skillImg} src={image} alt={alt} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SkillPair;
