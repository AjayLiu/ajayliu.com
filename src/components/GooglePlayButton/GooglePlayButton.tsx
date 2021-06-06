import styles from "./GooglePlayButton.module.scss";
interface Props {
  link: string;
}

const GooglePlayButton: React.FC<Props> = (props) => {
  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <a
        href={props.link}
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
    </>
  );
};

export default GooglePlayButton;
