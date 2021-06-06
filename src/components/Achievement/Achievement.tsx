import Link from "next/link";
import styles from "./Achievement.module.scss";

interface Props {
  link: string;
  description: string | JSX.Element;
  image: string;
  alt: string;
}

const Achievement: React.FC<Props> = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <div className={styles.achievement}>
          <img src={props.image} alt={props.alt} />
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Achievement;
