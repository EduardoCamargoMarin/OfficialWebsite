
import styles from '../modules/CardContainer.module.css'
import { Link } from 'react-router-dom'


function CardContainer (props) {
    return(
        <div className={styles.container}>
        <section>
                <h1 className={styles.titleContainer}>{props.firstTitle}</h1>
                    <p>{props.firstContent}</p>
            <Link to={'/Consulting'}><button className={styles.btnContainer}>Saiba mais</button></Link>
        </section>
        <section> 
                <h1 className={styles.titleContainer}>{props.secondTitle}</h1>  
                <p>{props.secondContent}</p>
            <Link to={'/Training'}><button className={styles.btnContainer}>Saiba mais</button></Link>
        </section>
        <section> 
                <h1 className={styles.titleContainer}>{props.thirdTitle}</h1>  
                <p>{props.thirdContent}</p>
            <Link to={'/Training'}><button className={styles.btnContainer}>Saiba mais</button></Link>
        </section>
    </div>
    )
}

export default CardContainer