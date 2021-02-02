import React, { useEffect, useState } from 'react'
import styles from '@styles/ProjectItem.module.css'

interface Props {
    title: string;
    description: string;
    hardToRead: boolean;
    bgImg: string;
    gridRow: number;
    gridCol: number;
    link: string;
    playstoreLink: string;
    isRecommended: boolean;
}

const ProjectItem: React.FC<Props> = ({ title, description, hardToRead, bgImg, gridRow, gridCol, link, playstoreLink, isRecommended}) => {
    const [isHover, setIsHover] = useState(false);
    const blockStyle = {
        backgroundImage: `url(${bgImg})`,
        gridRow: gridRow,
        gridColumn: gridCol
    }

    function click () {
        window.open(link || playstoreLink);
    }

    function mouseEnter (){
        setIsHover(true);
    }

    function mouseLeave (){
        setIsHover(false);
    }

    function handleAnchorClick (e){
        e.stopPropagation();
    }

    const textStyle = {
        // opacity: this.state.isHover ? "1":"0",
        // transition: this.state.isHover? "opacity 0.1s" : "opacity 0.5s"
        textShadow: hardToRead ? "black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px" : ""
    }

    let googleplayElem = <></>;
    let letsGoElem = <a onClick={(e) => handleAnchorClick} href={link}>Let's Go!</a>;
    if (playstoreLink != null) {
        googleplayElem =
            <a onClick={(e) => handleAnchorClick}
                href={playstoreLink}
            >
                <img
                    src="imgs/en_badge_web_generic.png"
                    width="153"
                    height="62"
                    alt="google play link button"
                />
            </a>

        if (link == null) {
            letsGoElem = <></>;
        }

    }
    let recommendedElem = <></>;
    if (isRecommended) {
        recommendedElem = <img id={styles.recommend} src="imgs/recommended.png" alt="recommendation thumbs up badge" />
    }

    return (
        <div style={blockStyle} className={styles.gameBlock} onMouseEnter={()=>mouseEnter} onMouseLeave={()=>mouseLeave} onClick={()=>click}>
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
    )



}

export default ProjectItem;