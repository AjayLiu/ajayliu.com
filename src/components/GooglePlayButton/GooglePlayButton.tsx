import styles from "./GooglePlayButton.module.scss";
import { imgPath } from "public/path";
interface Props {
  link: string;
}

const GooglePlayButton: React.FC<Props> = ({ link }) => {
  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <a
        className={styles.button}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          handleAnchorClick(e);
        }}
        href={link}
      >
        <img
          src={imgPath + "/playbutton.svg"}
          width="153"
          height="62"
          alt="google play link button"
        />
      </a>
    </>
  );
};

export default GooglePlayButton;
