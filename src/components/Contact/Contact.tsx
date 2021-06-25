import styles from "./Contact.module.scss";
import { useState } from "react";
import axios from "axios";

interface Props {
  email: string;
}

const Contact: React.FC<Props> = (props) => {
  const [formState, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Submit",
    err: "",
  });
  const onChange = (e) => {
    setForm({ ...formState, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!formState.sent) {
      setForm({
        ...formState,
        buttonText: "Sending...",
      });
      const resetForm = () => {
        setForm({
          name: "",
          email: "",
          message: "",
          sent: false,
          buttonText: "Submit",
          err: "",
        });
      };
      axios
        .post("/api/mail", formState)
        .then((res) => {
          if (res.data.result !== "success") {
            setForm({
              ...formState,
              buttonText: "Failed to send",
              sent: false,
              err: "fail",
            });
            setTimeout(() => {
              resetForm();
            }, 6000);
          } else {
            setForm({
              ...formState,
              sent: true,
              buttonText: "Sent",
              err: "success",
            });
            setTimeout(() => {
              resetForm();
            }, 6000);
          }
        })
        .catch((err) => {
          console.log(err);
          setForm({
            ...formState,
            buttonText: "Failed to send",
            err: "fail",
          });
        });
    }
  };

  return (
    <section>
      <h2 className="sectionTitle">Contact</h2>
      <div className={styles.contact}>
        <div className={styles.gmailInfo}>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`}
          >
            <img src="img/gmail.svg" alt="email" />
          </a>
          <p>contact@ajayliu.com</p>
        </div>
        {/* THIS IS A BOT FIELD BELOW */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div className={styles.hidden}>
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>
        </form>

        <form className={styles.form} name="contact">
          <div className={styles.formTitle}>Contact Form</div>
          <div className={styles.fieldsContainer}>
            <p onChange={onChange} className={styles.field}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name"
              />
            </p>
            <p onChange={onChange} className={styles.field}>
              <input
                className={styles.input}
                type="text"
                name="email"
                placeholder="Email"
              />
            </p>
            <p onChange={onChange} className={styles.field}>
              <textarea
                className={styles.messageBox}
                name="message"
                placeholder="Your Message"
              ></textarea>
            </p>
          </div>
          <button className={styles.formButton} onClick={submitForm}>
            {formState.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
