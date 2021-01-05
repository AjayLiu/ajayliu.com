import styles from './Contact.module.css'

export default function Contact({email}) {
  return (
    <section >
      <h2 class="sectionTitle">Contact</h2>
      <div id={styles.contact}>
        <a href= {`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} >
          <div id={styles.contactBar}>
            <img src="imgs/gmail-512.png" alt="gmail logo"/>
            <p>
              {email}
            </p>
          </div>        
        </a>
      </div>
    </section>
  )
}
