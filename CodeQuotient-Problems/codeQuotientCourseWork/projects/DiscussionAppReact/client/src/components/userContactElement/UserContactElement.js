import { useState } from "react";
import styles from "./styles.module.css"
export default function UserContactElement(props) {
    function handleClick(e) {
        props.onClick(e);
    }
    return (
        <div onClick={handleClick} className={styles.container}>
            <div className={styles.innerDiv}>

            <img className={styles.profile} src={"http://localhost:8000/"+props.userProfile}/>

                <h2 className={styles["heading2-read"]}>{props.userName}</h2>

            </div>
        </div>
    )
}