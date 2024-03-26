import styles from '../modules/Footer.module.css'

function Footer() {
    return(
        <div className={styles.container}>
            <h1>logo</h1>
            <nav className={styles.navFooter}>
                <li>Linkedin</li>
                <li>Contato</li>
                <li>Parceria</li>
                <li>Trabalhe conosco</li>
            </nav>
        </div>
    )
}

export default Footer