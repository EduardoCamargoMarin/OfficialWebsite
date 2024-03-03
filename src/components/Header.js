import React from "react";
import { Link } from "react-router-dom";
import styles from '../modules/Header.module.css'


function Header () {
    return(
        <div className={styles.headerContainer}>
        <div>
            <h1>Logo</h1>
        </div>
            <div>
                <nav className={styles.navBar}>
                    <Link to={''}><button className={styles.btnNavBar}>Início</button></Link>
                    <Link to={''}><button className={styles.btnNavBar}>Sobre</button></Link>
                    <Link to={''}><button className={styles.btnNavBar}>Serviços</button></Link>
                    <Link to={''}><button className={styles.btnNavBar}>Portfólio</button></Link>
                    <Link to={''}><button className={styles.btnNavBar}>Contato</button></Link>
                </nav>
            </div>
        </div>

    );
}

export default Header