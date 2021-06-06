import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}{" "}
        <Link href="https://ajayliu.com">
          <a>Ajay Liu</a>
        </Link>
        . All Rights Reserved •{" "}
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com">
          <a>contact@ajayliu.com</a>
        </Link>
      </p>
      <div id={styles.socialLinks}>
        <Link href="https://ajayliu.com">
          <a>
            <Image
              className={styles.image}
              src={"/img/web_icon.svg"}
              alt="website logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <Link href="https://github.com/AjayLiu">
          <a>
            <Image
              className={styles.image}
              src={"/img/github.svg"}
              alt="github logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ajayliu/">
          <a>
            <Image
              className={styles.image}
              src={"/img/linkedin.svg"}
              alt="github logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UClr6XCaguPeM0g7UL6Lvs3g">
          <a>
            <Image
              className={styles.image}
              src={"/img/youtube.svg"}
              alt="github logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
