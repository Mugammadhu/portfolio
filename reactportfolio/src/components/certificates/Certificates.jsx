import  certificates  from "../../data/certificates.json"
import { Certificate } from "./Certificate"
import styles from './Certificates.module.css'


export const Certificates = () => {
  return (
    <main className={styles.container} id="Certificates">
        <h2 className={styles.title}>Certificates</h2>
        
            <div className={styles.certificates}>
              {certificates.map((certificate)=>(
                <Certificate key={certificate.id} certificate={certificate}/>
              ))}
           
        </div>

    </main>
  )
}
