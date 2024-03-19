import { Link } from 'react-router-dom'
import styles from '../modules/ImageContainer.module.css'

function ImageContainer(props) {
    return( 
        <div className={styles.container}>
            <section className={styles.sectionContainer}>
                <img className={styles.image} src={props.image} alt='Digital Card' />
            </section>
            <section className={styles.sectionContainer}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Link to={''}><button className={styles.btnContainer}>Saiba Mais</button></Link>
            </section>
        </div>
    )
}
export default ImageContainer