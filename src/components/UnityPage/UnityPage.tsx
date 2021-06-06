import React from "react";
import Head from "next/head";
import styles from "./UnityPage.module.scss";
import templateStyles from "./TemplateData.module.scss";
import GooglePlayButton from "@components/GooglePlayButton/GooglePlayButton";
import Link from "next/link";

interface Props {
  slug: string;
  gameName: string;
  jsonPath: string;
  width: string;
  height: string;
  howTo: JSX.Element;
  fullscreenOption?: boolean;
  is2018?: boolean;
  playstoreLink?: string;
}

const UnityPage: React.FC<Props> = (props) => {
  const unityLoaderPath = props.is2018
    ? "/2018UnityLoader.js"
    : "/UnityLoader.js";

  const fullscreenHandler = () => {
    // @ts-ignore
    unityInstance.SetFullscreen(1);
  };

  var fullscreenElem = props.fullscreenOption ? (
    <>
      <div className={templateStyles.footer}>
        <div
          className={templateStyles.fullscreen}
          onClick={fullscreenHandler}
        ></div>
        <div className={templateStyles.title}>
          Click here to enter fullscreen (recommended) →{" "}
        </div>
      </div>
    </>
  ) : (
    ""
  );

  return (
    <>
      <Head>
        <script src={unityLoaderPath}></script>
        <script>
          var unityInstance = UnityLoader.instantiate( `unityContainer`, `
          {props.jsonPath}`);
        </script>
        <title>{props.gameName}</title>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <Link href="../">
        <a className={styles.returnHome}>Return Home</a>
      </Link>
      <div className={styles.howTo}>{props.howTo}</div>
      <div className={styles.gamename}>{props.gameName}</div>
      <div className={styles.webglContent}>
        <div
          id="unityContainer"
          style={{
            width: `${props.width}`,
            height: `${props.height}`,
            margin: "auto",
          }}
        ></div>
        {fullscreenElem}
      </div>

      {props.playstoreLink && <GooglePlayButton link={props.playstoreLink} />}
    </>
  );
};

export default UnityPage;
