import styles from  '../modules/RowCards.module.css'

function RowCards(props) {
    return(
        <div className={styles.container}>
            <section>
                <img className={styles.image} src={props.image1} alt='info 1' />
                <p>{props.content1}</p>
            </section>
            <section>
                <img className={styles.image} src={props.image2} alt='info 2' />
                <p>{props.content2}</p>
            </section>
            
            
        </div>
    )
}

export default RowCards