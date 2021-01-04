import styles from './LandingPage.module.css'
import React from 'react'
import NET from 'vanta/dist/vanta.net.min'


class LandingPage extends React.Component{
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = NET({
            el: this.vantaRef.current,
            points: 5,
            spacing: 22,
            maxDistance: 30,
            backgroundColor: "#252934",
            color: "#74e78d",
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            showDots: true            
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render (){
        return (
        <div id={styles.net} ref={this.vantaRef}>
            <div className={styles.intro}>
                <h1>
                Hello! My name is <strong>Ajay Liu</strong><br />
                I love creating things!
                <br />
                <button id={styles.viewButton}>Let's Go!</button>
                </h1>
            </div>
        </div>
        )        
    }
}

export default LandingPage;