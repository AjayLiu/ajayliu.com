import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Skill } from "public/SkillList";
import styles from "./SkillPair.module.scss";

interface Props {
  skill: Skill;
  size: "large" | "small";
}

const SkillPair: React.FC<Props> = (props) => {
  return (
    <div className={cx({ small: props.size === "small" })}>
      <div className={styles.skillPair}>
        <div className={styles.skillImgContainer}>
          <img
            className={styles.skillImg}
            src={props.skill.image}
            alt={props.skill.alt}
          />
        </div>
        <p>{props.skill.name}</p>
      </div>
    </div>
  );
};

export default SkillPair;
