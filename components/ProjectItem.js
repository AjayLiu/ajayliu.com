import React from 'react'
import styles from './ProjectItem.module.css'
import  {BrowserRouter, Redirect } from 'react-router-dom'

class ProjectItem extends React.Component{

    constructor(props){
        super(props);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.click = this.click.bind(this);
        this.state={
            redirect: this.props.link,
            isHover: false,
            hardToRead: this.props.hardToRead,
        };

        this.blockStyle = {
            backgroundImage: `url(${this.props.bgImg})`,
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridCol
        }        


    }

    click = () => {
        window.open(this.state.redirect);
    }

    mouseEnter = () => {
        this.setState({isHover: true});
    }
    
    mouseLeave = () => {
        this.setState({isHover: false});
    }

    handleAnchorClick = (e) => {
        e.stopPropagation();
    }

    render(){
        const textStyle = {
            // opacity: this.state.isHover ? "1":"0",
            // transition: this.state.isHover? "opacity 0.1s" : "opacity 0.5s"
            textShadow: this.state.hardToRead ? "black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px, black 0px 0px 10px" : ""
        }
        
        var googleplayElem='';
        var letsGoElem = <a onClick={this.handleAnchorClick} href={this.props.link}>Let's Go!</a>;
        if(this.props.playstoreLink != null){
            googleplayElem = 
            <a onClick={this.handleAnchorClick} 
                href={this.props.playstoreLink}
            >
            <img
              src="imgs/en_badge_web_generic.png"
              width="153"
              height="62"
              alt = "google play link button"
            />
            </a>

            if(this.props.link == null){
                letsGoElem= '';
            }

        }
        var recommendedElem = "";
        if(this.props.isRecommended){
            recommendedElem = <img id={styles.recommend} src="imgs/recommended.png" alt = "recommendation thumbs up badge"/>
        }

        return (
            <div style={this.blockStyle} className={styles.gameBlock} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.click}>
                {recommendedElem}
                <div style={textStyle} className={styles.gametext}>
                    <div className={styles.gametitle}>{this.props.title}</div>
                    <div className={styles.gamedescription}>
                        <p>{this.props.description}</p>
                    </div>
                    <div className={styles.gamelinks}>
                        {letsGoElem}
                        {googleplayElem}
                    </div>
                </div>
            </div>
        )
    }
    
    
     
}

export default ProjectItem;