import styles from '@styles/Card.module.css'
import Footer from '@components/Footer'
import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'
export default function Card({title, banner, content, signature, imagePath}) {
    return (
        <>
            <GoogleAnalyticsHook/>

            <title>
                {title}
            </title>
            <section id = {styles.banner}>
                {banner}
            </section>
            <section id = {styles.content}>
                <img src = {imagePath} id = {styles.image} />
                <p>
                    {content}                    
                </p>
                <p id={styles.signature}>{signature}</p>
            </section>
            <Footer />
        </>
    )    
}
