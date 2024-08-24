/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";
import { getImageUrl } from "../../utils.js";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a Laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm Frontend Developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bachelors.png")} alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>BSC.CS</h3>
              <p>
                I was completed my Bachelor's of Computer Science 3 years course in <span><a href="https://www.drmgrdu.ac.in/" target="_blank">Dr.M.G.R Educational and Research Institute</a></span> at Chennai in India
              </p>
              <p>2020-2023</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/masters.png")} alt="ui Icon" />
            <div className={styles.aboutItemText}>
              <h3>MSC.CFIS</h3>
              <p>
              I am pursuing my Master's of Cyber Forensic Information Security 2 years course in <span><a href="https://www.drmgrdu.ac.in/" target="_blank">Dr.M.G.R Educational and Research Institute</a></span> at Chennai in India
              </p>
              <p>2023-2025</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
