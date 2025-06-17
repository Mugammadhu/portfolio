import { useState, useEffect } from 'react';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id='projects' 
      className={`${styles.container} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.title}>
        <span className={styles.titleHighlight}>My Projects</span>
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} index={id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;