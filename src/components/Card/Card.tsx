import styles from "./Card.module.scss";
import Head from "next/head";

interface PropsObj {
  props: Props;
}
interface Props {
  title: string;
  banner: JSX.Element;
  content: JSX.Element;
  signature: JSX.Element;
  imagePath: string;
}
const Card: React.FC<PropsObj> = ({ props }) => {
  const { title, banner, content, signature, imagePath } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section id={styles.banner}>{banner}</section>

      <section id={styles.content}>
        <img src={imagePath} id={styles.image} width="200" height="200" />
        <div>{content}</div>
        <p id={styles.signature}>{signature}</p>
      </section>
    </>
  );
};

export default Card;
