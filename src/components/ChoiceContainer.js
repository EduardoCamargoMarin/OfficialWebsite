
import { Link } from 'react-router-dom'
import styles from '../modules/ChoiceContainer.module.css'

 export function ChoiceContainer (props) {
    return(
       <div className={styles.container}>
        <section className={styles.sectionContainer}>
            <h1 className={styles.mainTitle}>{props.title01}</h1>
            <h3>{props.content}</h3>
            <Link to={''}><button className={styles.btnSection}>Entrar em contato</button></Link>
        </section>

       </div>
    )
}