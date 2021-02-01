import styles from '@styles/SkillPair.module.css'

export default function SkillPair({image, alt, description}) {
    return (
        <div className={styles.skillPair}>
            <img src={image} alt={alt}/>
            <p>{description}</p>
        </div>
    )
}
