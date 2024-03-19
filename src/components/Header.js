import React from "react";
import { Link } from "react-router-dom";
import styles from '../modules/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Offcanvas } from 'react-bootstrap';


function Header () {

    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const handleToggleOffcanvas = () => {
      setShowOffcanvas((prev) => !prev);
    };
  
    const handleCloseOffcanvas = () => {
      setShowOffcanvas(false);
    };


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
            <div className={styles.navMobile}>
            <nav className={styles.btnMobileHeaderContainer}>
                <Button className={styles.btnNavBarMobileIcon} variant="primary" onClick={handleToggleOffcanvas}>
                    |||
                </Button>

        <Offcanvas style={{height: '35em'}} className={styles.offcanvasBody} show={showOffcanvas} onHide={handleCloseOffcanvas} placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
                    <Link to={''}><button className={styles.btnNavMobile}>Início</button></Link>
                    <Link to={''}><button className={styles.btnNavMobile}>Sobre</button></Link>
                    <Link to={''}><button className={styles.btnNavMobile}>Serviços</button></Link>
                    <Link to={''}><button className={styles.btnNavMobile}>Portfólio</button></Link>
                    <Link to={''}><button className={styles.btnNavMobile}>Contato</button></Link>
          </Offcanvas.Body>
        </Offcanvas>
                </nav>
            </div>
        </div>

    );
}

export default Header