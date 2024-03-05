
import styles from '../modules/ContainerDouble.module.css'
import { Link } from 'react-router-dom'


function ContainerDouble (props) {
    return(
        <div className={styles.container}>
        <section>
                <h1 className={styles.titleContainer}>{props.firstTitle}</h1>
                    <p>{props.firstContent}</p>
            <Link to={'/Consulting'}><button className={styles.btnContainer}>Saiba mais</button></Link>
        </section>
    </div>
    )
}

export default ContainerDouble