import styles from './Contact.module.css'
import {useState} from 'react'
import axios from 'axios';

export default function Contact({email}) {

  const [formState, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: 'Submit',
    err: ''
  })
  const onChange = (e) => {
      setForm({...formState, [e.target.name]: e.target.value });
  }
  const submitForm = async (e) => {
    e.preventDefault();
    if(!formState.sent){

      setForm({
          ...formState,
          buttonText: 'Sending...'
      })
      const resetForm = () => {
          setForm({
              name: '',
              email: '',
              message: '',
              sent: false,
              buttonText: 'Submit',
              err: ''
          });
      }
      axios.post('/api/mail', formState)
      .then(res => {
          console.log(res.data);
          if(res.data.result !=='success') {
              setForm({
                  ...formState,
                  buttonText: 'Failed to send',
                  sent: false,
                  err: 'fail'
              })
              setTimeout(() => {
                  resetForm()
              }, 6000)
          } else {
              setForm({
                  ...formState,
                  sent: true,
                  buttonText: 'Sent',
                  err: 'success'
              })
              setTimeout(() => {
                  resetForm();
              }, 6000)
          }
      }).catch( (err) => {
          //console.log(err.response.status)
          setForm({
              ...formState,
              buttonText: 'Failed to send',
              err: 'fail'
          })
      })
    }

  }
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
        <form className={styles.form} name="contact">
          <div className={styles.formTitle}>Contact Form</div>
          <div className={styles.row}>
            <p onChange={(e)=>onChange(e)} className={styles.field}>
              <input className={styles.smallInput} type="text" name="name" placeholder="Your Name"/>
            </p>
            <p onChange={(e)=>onChange(e)} className={styles.field}>
              <input className={styles.smallInput} type="text" name="email" placeholder="Your Email"/>
            </p>
          </div>
          <p onChange={(e)=>onChange(e)} className={styles.field}>
            <textarea className={styles.messageBox} type="text" name="message" placeholder="Your Message"></textarea>
          </p>
          <button className={styles.formButton} onClick={(e)=>submitForm(e)}>{formState.buttonText}</button>
        </form>
      </div>
      
    </section>
  )
}