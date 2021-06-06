import styles from "./Achievement.module.scss";

interface Props {
  link: string;
  description: string | JSX.Element;
  image: string;
  alt: string;
}

const Achievement: React.FC<Props> = (props) => {
  return (
    <a href={props.link}>
      <div className={styles.achievement}>
        <img src={props.image} alt={props.alt} />
        <p>{props.description}</p>
      </div>
    </a>
  );
};

export default Achievement;
