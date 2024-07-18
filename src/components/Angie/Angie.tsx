import styles from "./Angie.module.scss";
const Angie: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.x}>
          <img className={styles.y} src="../img/angie.png" alt="angie" />
        </div>
        <h1 className={styles.title}>I LOVE YOU, ANGELINA</h1>
      </div>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <p className={styles.paragraph}>
        In this chaotic universe of possibilities we call life, each moment
        unique and fleeting, like a star in the night sky, a reflection. Yet, in
        this vast
      </p>
    </div>
  );
};
export default Angie;
