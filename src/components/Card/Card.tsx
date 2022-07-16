import styles from "./Card.module.scss";
import Head from "next/head";
import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";

interface PropsObj {
  props: Props;
}
interface Props {
  title: string;
  banner: JSX.Element;
  content: JSX.Element;
  signature: JSX.Element;
  imagePath: string;
  confetti?: boolean;
}
const Card: React.FC<PropsObj> = ({ props }) => {
  const { title, banner, content, signature, imagePath } = props;
  const confettiConfig = {
    angle: 91,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const [shoot, setShoot] = useState(false);
  useEffect(() => {
    if (props.confetti) setShoot(true);
  }, [props.confetti]);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section id={styles.banner}>
        <div className={styles.confetti}>
          <Confetti active={shoot} config={confettiConfig} />
        </div>
        {banner}
      </section>
      <section id={styles.content}>
        <img src={imagePath} id={styles.image} />
        <div>{content}</div>
        <p id={styles.signature}>{signature}</p>
      </section>
    </>
  );
};

export default Card;
