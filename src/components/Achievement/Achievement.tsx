import StyledLink from "@components/StyledLink/StyledLink";
import styles from "./Achievement.module.scss";

interface Props {
  link: string;
  description: string | JSX.Element;
  image: string;
  alt: string;
}

const Achievement: React.FC<Props> = ({ link, description, image, alt }) => {
  return (
    <StyledLink href={link}>
      <div className={styles.achievement}>
        <img src={image} alt={alt} />
        <p>{description}</p>
      </div>
    </StyledLink>
  );
};

export default Achievement;
