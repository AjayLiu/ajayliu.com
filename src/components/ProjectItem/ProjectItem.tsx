// import React, { useEffect, useState } from 'react'
import styles from "./ProjectItem.module.scss";
import GooglePlayButton from "@components/GooglePlayButton/GooglePlayButton";
import { getStaticProps } from "src/pages/games/[slug]";
import StyledLink from "@components/StyledLink/StyledLink";
import { useRouter } from "next/dist/client/router";

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
}

const ProjectItem: React.FC<Props> = ({
  title,
  description,
  hardToRead,
  bgImg,
  gridRow,
  gridCol,
  link,
  playstoreLink,
  isRecommended,
  bgColor,
}) => {
  // const [isHover, setIsHover] = useState(false);
  const blockStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: bgColor,
    gridRow: gridRow,
    gridColumn: gridCol,
  };

  const click = () => {
    window.location.href = link || playstoreLink;
  };

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
    textShadow: hardToRead
      ? "black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px"
      : "",
  };

  let googleplayElem = <></>;
  let letsGoElem = (
    <StyledLink href={link}>
      <div
        className={styles.link}
        // onClick={(e) => handleAnchorClick(e)}
      >
        Let's Go!
      </div>
    </StyledLink>
  );
  if (playstoreLink != null) {
    googleplayElem = <GooglePlayButton link={playstoreLink} />;
    if (link == null) {
      letsGoElem = <></>;
    }
  }
  let recommendedElem = <></>;
  if (isRecommended) {
    recommendedElem = (
      <img
        id={styles.recommend}
        src="imgs/recommended.png"
        alt="recommendation thumbs up badge"
      />
    );
  }

  return (
    <div
      style={blockStyle}
      className={styles.gameBlock}
      /* onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} */ onClick={click}
    >
      {recommendedElem}
      <div style={textStyle} className={styles.gametext}>
        <div className={styles.gametitle}>{title}</div>
        <div className={styles.gamedescription}>
          <p>{description}</p>
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
