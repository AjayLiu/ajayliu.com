import styles from "./Contact.module.scss";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
          console.log(res.data);
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
      <div id={styles.contact}>
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`}
        >
          <div className="link" id={styles.contactBar}>
            <Image
              src="/img/gmail.svg"
              className={styles.image}
              alt="gmail logo"
              width="100"
              height="100"
            />
            <p>{props.email}</p>
          </div>
        </Link>
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
            <div className={styles.row}>
              <p onChange={onChange} className={styles.field}>
                <input
                  className={styles.smallInput}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </p>
              <p onChange={onChange} className={styles.field} id={styles.email}>
                <input
                  className={styles.smallInput}
                  type="text"
                  name="email"
                  placeholder="Your Email"
                />
              </p>
            </div>
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
