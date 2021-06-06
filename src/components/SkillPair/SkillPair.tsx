import styles from "./SkillPair.module.scss";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  description: string;
}

const SkillPair: React.FC<Props> = (props) => {
  return (
    <div className={styles.skillPair}>
      <div className={styles.skillImgContainer}>
        <Image
          className={styles.skillImg}
          src={props.image}
          alt={props.alt}
          width="70"
          height="70"
        />
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default SkillPair;
