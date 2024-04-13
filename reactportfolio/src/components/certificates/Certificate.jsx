/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";
import styles from './Certificate.module.css'

export const Certificate = ({certificate:{title,description,imageSrc,document}}) => {
  return (
    <div className={styles.certificate}>
    <img src={getImageUrl(imageSrc)} alt={`${title} certificate`}  className={styles.image}/>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
   <a href={document} target="_blank" className={styles.pdf}>{title} PDF</a>
    </div>
  )
}
