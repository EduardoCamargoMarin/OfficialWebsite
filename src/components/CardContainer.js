
import styles from '../modules/CardContainer.module.css'


function CardContainer (props) {
    return(
        <div className={styles.container}>
        <section>
                <h1 className={styles.titleContainer}>{props.firstTitle}</h1>
                    <p>{props.firstContent}</p>
        </section>
        <section> 
                <h1 className={styles.titleContainer}>{props.secondTitle}</h1>  
                <p>{props.secondContent}</p>
        </section>
        <section> 
                <h1 className={styles.titleContainer}>{props.thirdTitle}</h1>  
                <p>{props.thirdContent}</p>
        </section>
    </div>
    )
}

export default CardContainer