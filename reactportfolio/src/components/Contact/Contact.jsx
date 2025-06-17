import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState({ name: "", email: "", message: "" });
  const [resMsg, setResMsg] = useState({ msg: "", status: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    let errors = { ...errMsg };

    if (name === "name")
      errors.name = value.trim() === "" ? "Name is required" : "";
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.email =
        value.trim() === ""
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email"
          : "";
    }
    if (name === "message")
      errors.message = value.trim() === "" ? "Message cannot be empty" : "";
    setErrMsg(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    if (Object.keys(errors).length > 0) {
      setErrMsg(errors);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/send",
        formData
      );
      if (response.status === 200) {
        setResMsg({ msg: "Message Sent Successfully!", status: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResMsg({
          msg: "Something went wrong, try again.",
          status: "failure",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setResMsg({ msg: "Network error, try again.", status: "failure" });
    }
    setTimeout(() => setResMsg({ msg: "", status: "" }), 4000);
  };

  return (
    <footer className={styles.container} id="contact">
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </motion.div>

      <div className={styles.contentWrapper}>
        {/* Contact Links */}
        <motion.ul
          className={styles.links}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:mugammadhuoff@gmail.com" target="_blank">
              mugammadhuoff@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub Icon"
            />
            <a href="https://github.com/mugammadhusate" target="_blank">
              github.com/myname
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Icon"
            />
            <a
              href="https://www.linkedin.com/in/mugammadhusate"
              target="_blank"
            >
              Linkedin.com/myname
            </a>
          </li>
        </motion.ul>

        {/* Contact Form */}
        <motion.section
          className={styles.formContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.formTitle}>Send me a message</h3>

          <AnimatePresence>
            {resMsg.msg && (
              <motion.div
                className={`${styles.alert} ${
                  resMsg.status === "success" ? styles.success : styles.error
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {resMsg.msg}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.formControl}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errMsg.name && <p className={styles.errorText}>{errMsg.name}</p>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errMsg.email && (
                <p className={styles.errorText}>{errMsg.email}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                name="message"
                className={styles.formControl}
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errMsg.message && (
                <p className={styles.errorText}>{errMsg.message}</p>
              )}
            </div>

            <div className={styles.submitWrapper}>
              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.section>
      </div>
    </footer>
  );
};

export default Contact;
