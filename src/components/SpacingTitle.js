import styles from '../modules/SpacingTitle.module.css'

function SpacingTitle (props) {
    return(
        <div className={styles.container}><h1>{props.title}</h1></div>
    )
}

export default SpacingTitle