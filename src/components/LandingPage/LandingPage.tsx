import styles from "./LandingPage.module.scss";
import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import { TypeAnimation } from "react-type-animation";

const LandingPage: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      backgroundColor: "#252934",
      color: "#74e78d",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1,
      points: 3.0,
      maxDistance: 50.0,
      spacing: 40.0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const handleClick = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top: pageHeight, behavior: "smooth" });
  };

  return (
    <div id={styles.net} ref={vantaRef}>
      <div className={styles.intro}>
        <h1 className={styles.introText}>
          Hello! My name is <strong>Ajay Liu</strong>
          <br />
          <TypeAnimation
            sequence={[
              "Fullstack Web Developer",
              3000,
              "Mobile App Developer",
              1000,
              "Game Developer",
              1000,
              "Dancer",
              1000,
              "Tofu Enthusiast",
              1000,
            ]}
            speed={20}
            preRenderFirstString={true}
            style={{ display: "block", height: "1em" }}
            repeat={Infinity}
          />
          <br />
          <button id={styles.viewButton} onClick={handleClick}>
            Let's Go <span>&#8595;</span>
          </button>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
