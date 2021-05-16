import StyledLink from "@components/StyledLink/StyledLink";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  const imgPath = "https://ajayliu.com/imgs";
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://ajayliu.com">Ajay Liu</a>. All Rights Reserved •{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com">
            contact@ajayliu.com
          </a>
        </p>
        <div id={styles.socialLinks}>
          <StyledLink href="https://ajayliu.com">
            <img src={imgPath + "/web_icon.svg"} alt="website logo" />
          </StyledLink>
          <StyledLink href="https://github.com/AjayLiu">
            <img src={imgPath + "/github.svg"} alt="github logo" />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/ajayliu/">
            <img src={imgPath + "/linkedin.svg"} alt="linkedin logo" />
          </StyledLink>
          <StyledLink href="https://www.youtube.com/channel/UClr6XCaguPeM0g7UL6Lvs3g">
            <img src={imgPath + "/youtube.svg"} alt="youtube logo" />
          </StyledLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
