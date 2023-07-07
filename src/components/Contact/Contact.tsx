import styles from "./Contact.module.scss";
import { useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import Link from "next/link";

interface Props {
  email: string;
}

const Contact: React.FC<Props> = (props) => {
  const [formState, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // change the states based on their "name" fields
  const onChange = (e) => {
    setForm({ ...formState, [e.target.name]: e.target.value });
  };

  const recaptchaRef = useRef();

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });

    // reset the recaptcha
    // @ts-ignore
    recaptchaRef?.current?.reset();
    setPassedCaptcha(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!allowSend) {
      swal(
        "Cooldown",
        "Please wait 1 minute between sending each message.",
        "error"
      );
      return;
    }

    if (!passedCaptcha) {
      swal("ReCAPTCHA", "Please complete the ReCAPTCHA.", "error");
      return;
    }
    if (
      formState.name === "" ||
      formState.email === "" ||
      formState.message === ""
    ) {
      swal("Incomplete fields", "Please complete all fields.", "error");
      return;
    }
    axios
      .post("/api/mail", formState)
      .then((res) => {
        if (res.data.result !== "success") {
          swal("Error", "Failed to send", "error").then(() => {
            resetForm();
          });
        } else {
          swal("Success", "Message successfully sent.", "success").then(() => {
            resetForm();
          });

          // set timeout for sending (cooldown)
          setAllowSend(false);
          setTimeout(() => {
            setAllowSend(true);
          }, sendCooldown);
        }
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Failed to send", "error").then(() => {
          resetForm();
        });
      });
  };
  const [passedCaptcha, setPassedCaptcha] = useState(false);
  const onCaptcha = (value) => {
    axios.post("/api/recaptcha", { token: value }).then((res) => {
      if (res.data.success) {
        setPassedCaptcha(true);
      }
    });
  };

  // prevent spamming
  const [allowSend, setAllowSend] = useState(true);
  const sendCooldown = 60 * 1000; // 1 minute cooldown

  return (
    <section style={{ marginTop: "100px" }}>
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
        <div className={styles.resume}>
          <Link href={"/resume.pdf"}>
            <a target="_blank" className={styles.resumeLink}>
              <img src="img/resume.svg" alt="Resume" />
              <div className={styles.text}>Resume / CV</div>
            </a>
          </Link>
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
                value={formState.name}
              />
            </p>
            <p onChange={onChange} className={styles.field}>
              <input
                className={styles.input}
                type="text"
                name="email"
                placeholder="Email"
                value={formState.email}
              />
            </p>
            <p onChange={onChange} className={styles.field}>
              <textarea
                className={styles.messageBox}
                name="message"
                placeholder="Your Message"
                value={formState.message}
              ></textarea>
            </p>
          </div>
          <div className={styles.captcha}>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              onChange={onCaptcha}
              ref={recaptchaRef}
            />
          </div>
          <button className={styles.formButton} onClick={submitForm}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
