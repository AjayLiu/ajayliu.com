import React from "react";
import Head from 'next/head'
import styles from '@styles/UnityPage.module.css'
import templateStyles from '@styles/TemplateData.module.css'
import Footer from '@components/Footer'
import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'

interface Props {
    gameName : string;
    jsonPath : string;
    width: number;
    height: number;
    howTo: HTMLElement;
    fullscreenOption?: boolean;
    is2018?: boolean;
}

const UnityPage: React.FC <Props> = ({ gameName, jsonPath, width, height, howTo, fullscreenOption, is2018}) => {
    
    const unityLoaderPath = is2018? "/2018UnityLoader.js" : "/UnityLoader.js";    

    const fullscreenHandler = () => {
        // @ts-ignore
        unityInstance.SetFullscreen(1)
    }

    var fullscreenElem = fullscreenOption ?
    <>
        <div className={templateStyles.footer}>
            <div className={templateStyles.fullscreen} onClick={fullscreenHandler}></div>
            <div className = {templateStyles.title}>Click here to enter fullscreen (recommended) → </div>
        </div>
    </> : ""; 

    
    return (
        <>
        <GoogleAnalyticsHook/>
        <Head>
            <title>{gameName}</title>
            {/* <meta charset="utf-8" /> */}
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

            <script src={unityLoaderPath}></script>
            <script>
                var unityInstance = UnityLoader.instantiate(
                    "unityContainer",
                    "{jsonPath}"
                );
            </script>                            
        </Head>        

        <a className={styles.returnHome} href="../">Return Home</a>
        <div className={styles.howTo}>
            {howTo}
        </div>
        <div className={styles.gamename}>
            {gameName} 
        </div>
        <div className={styles.webglContent}>
            <div id="unityContainer" 
                style={{width: `${width}`, height: `${height}`, margin: "auto"}}>                
            </div>
            {fullscreenElem}
        </div>
        <Footer />

        </>
    );
    
}

export default UnityPage;