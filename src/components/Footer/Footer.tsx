import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  const projectRepoLink = "https://github.com/AjayLiu/ajayliu.com";
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
          />
        </a>
        <a href="https://www.youtube.com/channel/UCompAYRB224zqCPDyexvmng">
          <img
            className={styles.image}
            src={"/img/youtube.svg"}
            alt="github logo"
          />
        </a>
      </div>
      <div className={styles.repo}>
        <a href={projectRepoLink} className={styles.repoAnchor}>
          <img src={"/img/repo.svg"} />
          View this project on Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
