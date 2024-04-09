import { Link } from 'react-router-dom'
import styles from  '../modules/RowCards.module.css'

function RowCards(props) {
    return(
        <div className={styles.container}>
            <section>
                <img className={styles.image} src={props.image1} alt='info 1' />
                <h4>{props.title}</h4>
                <p>{props.content1}</p>
                <Link className={styles.link} to={props.linkTo01}>{props.link01}</Link>
            </section>
            <section>
                <img className={styles.image} src={props.image2} alt='info 2' />
                <h4>{props.secondTitle}</h4>
                <p>{props.content2}</p>
                <Link className={styles.link} to={props.linkTo02}>{props.link02}</Link>
            </section>
            
            
        </div>
    )
}

export default RowCards