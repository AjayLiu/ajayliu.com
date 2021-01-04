import styles from './Achievement.module.css'
import {Router, Link} from 'react-router-dom'

export default function Achievement({link, description, image, alt}) {
    return (
        <a href={link}>
            <div className={styles.achievement}>
            <img src={image} alt={alt}/>
            <p>{description}</p>
            </div>
        </a>
    )    
}
