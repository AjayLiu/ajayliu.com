import Image from "next/image";
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
          <Image src={props.image} alt={props.alt} width="100" height="100" />
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Achievement;
