import styles from "./Card.module.scss";
import Head from "next/head";

interface PropRaw {
  props: Props;
}
interface Props {
  title: string;
  banner: JSX.Element;
  content: JSX.Element;
  signature: JSX.Element;
  imagePath: string;
}
const Card: React.FC<PropRaw> = (props) => {
  const { title, banner, content, signature, imagePath } = props.props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section id={styles.banner}>{banner}</section>

      <section id={styles.content}>
        <img src={imagePath} id={styles.image} />
        <div>{content}</div>
        <p id={styles.signature}>{signature}</p>
      </section>
    </>
  );
};

export default Card;
