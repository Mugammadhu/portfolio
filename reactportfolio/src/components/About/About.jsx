// /* eslint-disable react/no-unescaped-entities */
// import styles from "./About.module.css";
// import { getImageUrl } from "../../utils.js";

// const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           className={styles.aboutImage}
//           src={getImageUrl("about/aboutImage.png")}
//           alt="Me sitting with a Laptop"
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/front.png")} alt="cursor Icon" />
//             <div className={styles.aboutItemText}>
//               <h3>MERN Stack Developer</h3>
//               <p>
//                 I'm Frontend Developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/bachelors.png")} alt="server Icon" />
//             <div className={styles.aboutItemText}>
//               <h3>BSC.CS</h3>
//               <p>
//                 I was completed my Bachelor's of Computer Science 3 years course in <span><a href="https://www.drmgrdu.ac.in/" target="_blank">Dr.M.G.R Educational and Research Institute</a></span> at Chennai in India
//               </p>
//               <p>2020-2023</p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/masters.png")} alt="ui Icon" />
//             <div className={styles.aboutItemText}>
//               <h3>MSC.CFIS</h3>
//               <p>
//               I am pursuing my Master's of Cyber Forensic Information Security 2 years course in <span><a href="https://www.drmgrdu.ac.in/" target="_blank">Dr.M.G.R Educational and Research Institute</a></span> at Chennai in India
//               </p>
//               <p>2023-2025</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };
// export default About;


/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";
import { getImageUrl } from "../../utils.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className={styles.content}>
        <motion.img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        <ul className={styles.aboutItems}>
          <motion.li
            className={styles.aboutItem}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={getImageUrl("about/front.png")} alt="Frontend Icon" />
            <div className={styles.aboutItemText}>
              <h3>MERN Stack Developer</h3>
              <p>
                Passionate about building responsive, accessible, and fast web applications using the MERN stack.
              </p>
            </div>
          </motion.li>

          <motion.li
            className={styles.aboutItem}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={getImageUrl("about/bachelors.png")} alt="Graduation Icon" />
            <div className={styles.aboutItemText}>
              <h3>B.Sc. Computer Science</h3>
              <p>
                Completed 3-year Bachelor's degree at{" "}
                <a href="https://www.drmgrdu.ac.in/" target="_blank" rel="noopener noreferrer">
                  Dr. M.G.R Educational and Research Institute
                </a>, Chennai.
              </p>
              <p>2020 - 2023</p>
            </div>
          </motion.li>

          <motion.li
            className={styles.aboutItem}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={getImageUrl("about/masters.png")} alt="Cybersecurity Icon" />
            <div className={styles.aboutItemText}>
              <h3>M.Sc. Cyber Forensics & IS</h3>
              <p>
                Currently pursuing a 2-year Master's degree in Cyber Forensics & Information Security at{" "}
                <a href="https://www.drmgrdu.ac.in/" target="_blank" rel="noopener noreferrer">
                  Dr. M.G.R Educational and Research Institute
                </a>, Chennai.
              </p>
              <p>2023 - 2025</p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default About;
