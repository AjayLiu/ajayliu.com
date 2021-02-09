import styles from '@styles/GooglePlayButton.module.css'

interface Props{
    link: string, 
}

const GooglePlayButton: React.FC<Props> = ({link}) => {
    const handleAnchorClick = (e) => {
        e.stopPropagation();
    }
    return (
        <>
        
            <a className={styles.button} onClick={(e: React.MouseEvent<HTMLElement>) => {handleAnchorClick(e)}}
                href={link}
            >
                <img
                    src="imgs/en_badge_web_generic.png"
                    width="153"
                    height="62"
                    alt="google play link button"
                />
            </a>
        </>
    )
}

export default GooglePlayButton;