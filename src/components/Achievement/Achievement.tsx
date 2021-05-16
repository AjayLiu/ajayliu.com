import Link from "next/link";
import styles from "./Achievement.module.scss";

interface Props {
  link: string;
  description: string | JSX.Element;
  image: string;
  alt: string;
}

const Achievement: React.FC<Props> = ({ link, description, image, alt }) => {
  return (
    <Link href={link}>
      <div className="link">
        <div className={styles.achievement}>
          <img src={image} alt={alt} />
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Achievement;
