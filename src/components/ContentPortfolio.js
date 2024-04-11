import styles from '../modules/ContentPortfolio.module.css'

export function ContentPortfolio(props) {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={styles.mockup01} alt='mockup' />
            <div className={styles.innerContainer}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}