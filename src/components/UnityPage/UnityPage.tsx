import React from "react";
import Head from "next/head";
import styles from "./UnityPage.module.scss";
import templateStyles from "./TemplateData.module.scss";
import GooglePlayButton from "@components/GooglePlayButton/GooglePlayButton";
import Script from "next/script";

interface PropsObj {
  props: Props;
}
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

const UnityPage: React.FC<PropsObj> = ({ props }) => {
  const unityLoaderPath = props.is2018
    ? "/2018UnityLoader.js"
    : "/UnityLoader.js";

  const fullscreenHandler = () => {
    // @ts-ignore
    unityInstance.SetFullscreen(1);
  };

  const fullscreenElem = props.fullscreenOption ? (
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
        <title>{props.gameName}</title>
        {/* <meta charset="utf-8" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Script strategy="beforeInteractive" src={unityLoaderPath} />
      <Script strategy="lazyOnload">
        unityInstance = UnityLoader.instantiate( `unityContainer`, `
        {props.jsonPath}`);
      </Script>
      <div
        style={{ textAlign: "center", margin: "50px auto", maxWidth: "800px" }}
      >
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2980b9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#3498db";
          }}
          onClick={() => (window.location.href = "/")}
        >
          Return to Home
        </a>
      </div>
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
