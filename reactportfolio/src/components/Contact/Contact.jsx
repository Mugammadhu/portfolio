import styles from './Contact.module.css'
import {getImageUrl} from '../../utils'

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                <a href="mailto:mugammadhuoff@gmail.com" target='_blank'>mugammadhuoff@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="GItHub Icon" />
                <a href="https://github.com/mugammadhusate" target='_blank'>github.com/myname</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Email Icon" />
                <a href="https://www.linkedin.com/in/m-mugammadhu-sate-484b50292/" target='_blank'>Linkedin.com/myname</a>
            </li>
        </ul>
    </footer>
  )
}
