import styles from '../modules/InfoCard.module.css'

function InfoCard(props) {
    return(
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            
        </div>
    )
}

export default InfoCard