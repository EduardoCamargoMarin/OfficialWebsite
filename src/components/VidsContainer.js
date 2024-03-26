import React from "react";
import styles from '../modules/VidsContainer.module.css'

 function VidsContainer (props) {
    return(
        <div className={styles.videoContainer}>
            <div>
                <h1 className={styles.title}>{props.title}</h1>
                <h2 className={styles.content}>{props.content}</h2>
            </div>
            
            <img className={styles.video} src={props.video} alt="Company Video"/>
        </div>
    )
}

export default VidsContainer