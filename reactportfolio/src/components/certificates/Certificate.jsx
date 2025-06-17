/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";
import styles from './Certificate.module.css';

export const Certificate = ({ certificate: { title, description, imageSrc, document } }) => {
  return (
    <motion.div 
      className={styles.certificate}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={getImageUrl(imageSrc)} 
          alt={`${title} certificate`} 
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <motion.a
          href={document}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pdf}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Certificate
        </motion.a>
      </div>
    </motion.div>
  );
};