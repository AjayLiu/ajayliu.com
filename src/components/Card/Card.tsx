import styles from "./Card.module.scss";
import Head from "next/head";
import Image from "next/image";

interface Props {
  title: string;
  banner: JSX.Element;
  content: JSX.Element;
  signature: JSX.Element;
  imagePath: string;
}
const Card: React.FC<Props> = (props) => {
  const { title, banner, content, signature, imagePath } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section id={styles.banner}>{banner}</section>

      <section id={styles.content}>
        <Image src={imagePath} id={styles.image} width="200" height="200" />
        <div>{content}</div>
        <p id={styles.signature}>{signature}</p>
      </section>
    </>
  );
};

export default Card;
