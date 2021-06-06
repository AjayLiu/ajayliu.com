import styles from "./LandingPage.module.scss";
import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

const LandingPage: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>();
  let vantaEffect;

  useEffect(() => {
    if (window.innerWidth > 1200) {
      vantaEffect = NET({
        el: vantaRef.current,
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
        showDots: true,
      });
    } else {
      vantaEffect = NET({
        el: vantaRef.current,
        points: 3,
        spacing: 35,
        maxDistance: 70,
        backgroundColor: "#252934",
        color: "#74e78d",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        showDots: true,
      });
    }
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
        <h1>
          Hello! My name is <strong>Ajay Liu</strong>
          <br />
          I love creating things!
          <br />
          <button id={styles.viewButton} onClick={handleClick}>
            Let's Go!
          </button>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
