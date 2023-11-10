import styles from "./LandingPage.module.scss";
import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

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
