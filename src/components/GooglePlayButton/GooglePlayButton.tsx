import styles from "./GooglePlayButton.module.scss";
import Link from "next/link";
import Image from "next/image";
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
          <Image
            src={"/img/playbutton.svg"}
            width="153"
            height="62"
            alt="google play link button"
          />
        </a>
      </Link>
    </>
  );
};

export default GooglePlayButton;
