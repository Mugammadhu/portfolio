import { motion } from "framer-motion";
import tools from "../../data/tools.json";
import { getImageUrl } from "../../utils";
import languages from "../../data/languages.json";
import Ui from "../../data/Ui.json";
import hosting from "../../data/hosting.json";
import styles from "./Experience.module.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="experience" className={styles.container}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className={styles.wrapper}
      >
        <motion.h2 variants={itemVariants} className={styles.title}>
          Experience & Skills
        </motion.h2>
        
        <div className={styles.content}>
          {/* Work Experience */}
          <div className={styles.workExperience}>
            <motion.div 
              className={styles.historyItem}
              whileHover={{ scale: 1.02 }}
              variants={itemVariants}
            >
              <div className={styles.historyImageContainer}>
                <img
                  src={getImageUrl("history/intern.jpg")}
                  alt="ShadowFox Logo"
                />
              </div>
              <div className={styles.historyItemDetails}>
                <h3>Web Development Intern <span>@ ShadowFox</span></h3>
                <p className={styles.duration}>Apr 2024 - May 2024 (1 month)</p>
                <ul>
                  <li><span className={styles.bullet}>•</span> Developed demo IPL website with live scores</li>
                  <li><span className={styles.bullet}>•</span> Built responsive UI with React and CSS</li>
                  <li><span className={styles.bullet}>•</span> Implemented API integrations</li>
                </ul>
                <div className={styles.skillsUsed}>
                  <span className={styles.skillBadge}>React</span>
                  <span className={styles.skillBadge}>JavaScript</span>
                  <span className={styles.skillBadge}>CSS3</span>
                  <span className={styles.skillBadge}>API Integration</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid - 2 columns */}
          <div className={styles.skillsGrid}>
            <SkillCategory 
              title="Core Technologies" 
              skills={languages} 
              variants={itemVariants}
              hoverVariants={skillHoverVariants}
            />
            
            <SkillCategory 
              title="UI Frameworks" 
              skills={Ui} 
              variants={itemVariants}
              hoverVariants={skillHoverVariants}
            />
            
            <SkillCategory 
              title="Development Tools" 
              skills={tools} 
              variants={itemVariants}
              hoverVariants={skillHoverVariants}
            />
            
            <SkillCategory 
              title="Hosting & Version Control" 
              skills={hosting} 
              variants={itemVariants}
              hoverVariants={skillHoverVariants}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SkillCategory = ({ title, skills, variants, hoverVariants }) => {
  return (
    <motion.div variants={variants} className={styles.skillCategory}>
      <h3 className={styles.skillTitle}>{title}</h3>
      <div className={styles.skillsContainer}>
        {skills.map((skill, id) => (
          <motion.div 
            key={id} 
            className={styles.skillItem}
            variants={variants}
            whileHover="hover"
          >
            <div className={`${styles.skillIcon} ${skill.level ? styles[skill.level.toLowerCase()] : ''}`}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                loading="lazy"
              />
            </div>
            <div className={styles.skillInfo}>
              <div className={styles.skillName}>{skill.title}</div>
              {skill.level && (
                <div className={`${styles.skillLevel} ${styles[skill.level.toLowerCase()]}`}>
                  {skill.level}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;