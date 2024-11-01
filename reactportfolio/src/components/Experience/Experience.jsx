import tools from "../../data/tools.json";
import { getImageUrl } from "../../utils";
import languages from "../../data/languages.json";
import Ui from "../../data/Ui.json"
import hosting from "../../data/hosting.json"
import seo from "../../data/seo.json"
import design from "../../data/design.json"
// import history from '../../data/history.json';
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>

          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>Languages & Frameworks</h2>
            <div className={styles.skillItem}>
              {languages.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>UI & FRAMEWORKS</h2>
            <div className={styles.skillItem}>
              {Ui.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>


          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>Version Control & Hosting</h2>
            <div className={styles.skillItem}>
              {hosting.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>WEB ACCESSIBILITY & SEO</h2>
            <div className={styles.skillItem}>
              {seo.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>


          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>Tools</h2>
            <div className={styles.skillItem}>
              {tools.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>


          <div className={styles.MainSkill}>
            <h2 className={styles.subTitle}>Design & Content Management</h2>
            <div className={styles.skillItem}>
              {design.map((language, id) => {
                return (
                  <div key={id} className={styles.skill}>
                    <div className={`${styles.skillImageContainer}`}>
                      <img
                        src={getImageUrl(language.imageSrc)}
                        alt={language.title}
                      />
                    </div>
                    <p>{language.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

         
        </div>

         {/* {skills.map((skill, id) => {
            const levelClass = skill.level === "Advanced" ? "advanced" : skill.level === "Intermediate" ? "intermediate" : "beginner";


            return (
              <div key={id} className={styles.skill }>
                <div className={`${styles.skillImageContainer} ${styles[levelClass]}`} >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
                
              </div>
            );
          })} */}

        {/* <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organization} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role},${historyItem.organization}`}</h3>
                <p>{`${historyItem.startDate},${historyItem.endDate}`}</p>
                <ul>
                    {historyItem.experiences.map((experience,id)=>(
                        <li key={id}>{experience}</li>
                    ))}
                </ul>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

// {
//   "role": "Software Engineer",
//   "organization": "Google",
//   "startDate": "Sept, 2022",
//   "endDate": "Present",
//   "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
//   "imageSrc": "history/google.png"
// }

//for history
//1.uncomment import
//2.uncomment ul
//3.uncomment obj and paste it in history.json
//4.change the width of the skills in css 100 to 45%

export default Experience;
