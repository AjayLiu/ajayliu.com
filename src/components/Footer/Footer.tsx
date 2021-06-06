import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} <a href="https://ajayliu.com">Ajay Liu</a>.
        All Rights Reserved •{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com">
          contact@ajayliu.com
        </a>
      </p>
      <div id={styles.socialLinks}>
        <a href="https://ajayliu.com">
          <img
            className={styles.image}
            src={"/img/web_icon.svg"}
            alt="website logo"
          />
        </a>
        <a href="https://github.com/AjayLiu">
          <img
            className={styles.image}
            src={"/img/github.svg"}
            alt="github logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/ajayliu/">
          <img
            className={styles.image}
            src={"/img/linkedin.svg"}
            alt="github logo"
            width={50}
            height={50}
          />
        </a>
        <a href="https://www.youtube.com/channel/UClr6XCaguPeM0g7UL6Lvs3g">
          <img
            className={styles.image}
            src={"/img/youtube.svg"}
            alt="github logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
