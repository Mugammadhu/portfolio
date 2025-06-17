/* eslint-disable react/no-unescaped-entities */

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false }, // Important for scoped layout
          particles: {
            color: { value: "#ffffff" },
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
        className={styles.particles}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            words={["Hi, I'm Mugammadhu Sate"]}
            loop={0} // 0 = infinite loop; or set 1 to run once
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <h2 className={styles.subtitle}>Full Stack Developer | MERN Stack</h2>
        <a href="#projects" className={styles.scrollBtn}>
          ↓ Scroll to Projects
        </a>

        <h3 className={styles.contactTitle}>Contact</h3>
        <div className={styles.contact}>
          <a
            href="mailto:mugammadhu.sate@gmail.com"
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
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Mugammadhu Sate's Profile"
        loading="lazy"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
