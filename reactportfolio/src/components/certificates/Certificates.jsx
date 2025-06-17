import { motion } from "framer-motion";
import certificates from "../../data/certificates.json";
import { Certificate } from "./Certificate";
import styles from './Certificates.module.css';

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className={styles.container} 
      id="certificates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 
        className={styles.title}
        variants={itemVariants}
      >
        My <span className={styles.highlight}>Certifications</span>
      </motion.h2>
      
      <div className={styles.certificates}>
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -10 }}
          >
            <Certificate certificate={certificate} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;