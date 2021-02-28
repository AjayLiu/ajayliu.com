import styles from '@styles/Skills/SkillPair.module.css'

interface Props{
    image: string;
    alt: string;
    description: string;
}

const SkillPair: React.FC<Props> = ({image, alt, description}) => {
    return (
        <div className={styles.skillPair}>
            <img src={image} alt={alt}/>
            <p>{description}</p>
        </div>
    )
}

export default SkillPair;