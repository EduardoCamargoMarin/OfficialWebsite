import React from "react";
import styles from '../modules/VidsContainer.module.css'

 function VidsContainer (props) {
    return(
        <div className={styles.videoContainer}>
            <img className={styles.video} src={props.video} alt="Company Video"/>
        </div>
    )
}

export default VidsContainer