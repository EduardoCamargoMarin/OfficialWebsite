
import { Link } from 'react-router-dom'
import styles from '../modules/SingleCard.module.css'

 function SingleCard (props) {
    return(
       <div className={styles.container}>
        <section className={styles.sectionContainer}>
            <h1 className={styles.mainTitle}>{props.title}</h1>
        </section>
        <section className={styles.sectionContainer}>
            <p>{props.content}</p>
            <Link to={''}><button className={styles.btnSection}>Saiba mais</button></Link>
        </section>
       </div>
    )
}

export default SingleCard