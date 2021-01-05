import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © 2020 Ajay Liu. All Rights Reserved •
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com"
            > contact@ajayliu.com
          </a>
        </p>
        <div id={styles.socialLinks}>
          <a href="https://github.com/AjayLiu">
            <img src="imgs/github.png" alt="github logo"/>
          </a>
          <a href="https://www.linkedin.com/in/ajayliu/">
            <img src="imgs/linkedin.png" alt="linkedin logo"/>
          </a>
          <a href="https://www.youtube.com/channel/UClr6XCaguPeM0g7UL6Lvs3g">
            <img src="imgs/youtubedark.png" alt="dark youtube logo"/>
          </a>
        </div>
      </footer>
    </>
  )
}
