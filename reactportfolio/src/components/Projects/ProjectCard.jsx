import { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils";
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project: { imageSrc, title, description, demo, source, skills }, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150 * index);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img 
          src={getImageUrl(imageSrc)} 
          alt={`Image of ${title}`} 
          className={`${styles.image} ${isHovered ? styles.imageHover : ''}`}
        />
        <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ''}`}></div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a 
          href={demo} 
          className={styles.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Demo
          <span className={styles.linkUnderline}></span>
        </a>
        <a 
          href={source}
          className={styles.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Source
          <span className={styles.linkUnderline}></span>
        </a>
      </div>
    </div>
  );
};