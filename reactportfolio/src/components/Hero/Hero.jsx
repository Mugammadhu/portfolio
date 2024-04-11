/* eslint-disable react/no-unescaped-entities */

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Mugammadhu Sate</h1>
        <p className={styles.description}>
          I'm a full-stack developer fresher currently pursuing Master degree
        </p>

        <h3 className={styles.contactTitle}>Contact</h3>
        <div className={styles.contact}>
          <a
            href="mailto:mugammadhuoff@gmail.com"
            className={styles.contactEmailBtn}
          >
            Email
          </a>
          <a href="tel:6374296214" className={styles.contactMobileBtn}>
            Mobile
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
