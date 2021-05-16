import styles from "./StyledLink.module.scss";
import Link from "next/link";

interface Props {
  href: string;
}

const StyledLink: React.FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <div className={styles.link}>{props.children}</div>
    </Link>
  );
};

export default StyledLink;
