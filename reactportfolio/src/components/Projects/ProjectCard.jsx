/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project:{imageSrc,title,description,demo,source,skills}}) => {
  return (
    <div className={styles.container}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {skills.map((skill,id)=>(
                            <li key={id} className={styles.skill}>{skill}</li>
                        ))}
                    </ul>
                    <div className={styles.links}>
                        <a href={demo} className={styles.link} target="_blank">Demo</a>
                        <a href={source}className={styles.link} target="_blank">Source</a>
                    </div>
                </div>
  )
}
