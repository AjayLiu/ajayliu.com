import styles from "./GooglePlayButton.module.scss";
import Link from "next/link";
interface Props {
  link: string;
}

const GooglePlayButton: React.FC<Props> = (props) => {
  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <Link href={props.link}>
        <a
          className={styles.button}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            handleAnchorClick(e);
          }}
        >
          <img
            src={"/img/playbutton.svg"}
            alt="google play link button"
            className={styles.img}
          />
        </a>
      </Link>
    </>
  );
};

export default GooglePlayButton;
