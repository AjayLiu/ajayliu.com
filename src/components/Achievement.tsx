import styles from '@styles/Achievement.module.css'

interface Props {
   link: string;
   description: string | JSX.Element;
   image: string;
   alt: string; 
}

const Achievement: React.FC<Props> = ({link, description, image, alt}) => {
    return (
        <a href={link}>
            <div className={styles.achievement}>
            <img src={image} alt={alt}/>
            <p>{description}</p>
            </div>
        </a>
    )    
}

export default Achievement;