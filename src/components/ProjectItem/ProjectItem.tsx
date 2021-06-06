import styles from "./ProjectItem.module.scss";
import GooglePlayButton from "@components/GooglePlayButton/GooglePlayButton";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  hardToRead?: boolean;
  bgImg: string;
  gridRow: string;
  gridCol: string;
  link?: string;
  playstoreLink?: string;
  isRecommended?: boolean;
  bgColor?: string;
  imgWidth?: string;
}

const ProjectItem: React.FC<Props> = (props) => {
  const blockStyle = {
    backgroundImage: `url(${props.bgImg})`,
    backgroundSize: props.imgWidth || "cover",
    backgroundColor: props.bgColor,
    backgroundPosition: "50% 10%",
    gridRow: props.gridRow,
    gridColumn: props.gridCol,
  };

  const click = () => {
    window.location.href = props.link || props.playstoreLink;
  };

  // const [isHover, setIsHover] = useState(false);
  // const mouseEnter = () => {
  //     setIsHover(true);
  // }

  // const mouseLeave = () => {
  //     setIsHover(false);
  // }

  // const handleAnchorClick = (e) => {
  //   e.stopPropagation();
  // };

  const textStyle = {
    // opacity: this.state.isHover ? "1":"0",
    // transition: this.state.isHover? "opacity 0.1s" : "opacity 0.5s"
    textShadow: props.hardToRead
      ? "black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px"
      : "",
  };

  let googleplayElem = <></>;
  let letsGoElem = (
    <Link href={props.link}>
      <a>
        <div
          className={styles.link}
          // onClick={(e) => handleAnchorClick(e)}
        >
          Let's Go!
        </div>
      </a>
    </Link>
  );
  if (props.playstoreLink != null) {
    googleplayElem = <GooglePlayButton link={props.playstoreLink} />;
    if (props.link == null) {
      letsGoElem = <></>;
    }
  }
  let recommendedElem = <></>;
  if (props.isRecommended) {
    recommendedElem = (
      <img
        id={styles.recommend}
        src="/img/recommended.png"
        alt="recommendation thumbs up badge"
        width="80"
        height="80"
      />
    );
  }

  return (
    <div
      style={blockStyle}
      className={styles.gameBlock}
      /* onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} */
      onClick={click}
    >
      {recommendedElem}
      <div style={textStyle} className={styles.gametext}>
        <div className={styles.gametitle}>{props.title}</div>
        <div className={styles.gamedescription}>
          <p>{props.description}</p>
        </div>
        <div className={styles.gamelinks}>
          {letsGoElem}
          {googleplayElem}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
