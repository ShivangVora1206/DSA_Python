import { useState } from "react";
import styles from "./styles.module.css"
export default function ContactElement(props) {
    const [read, setRead] = useState(props.read);
    function handleClick(e) {
        props.onClick(props.contactName, props.groupid, props.groupName);
        setRead(1);
        console.log("read set");
    }
    return (
        <div onClick={handleClick} className={styles.container}>
            <div className={styles.innerDiv}>
            <img className={styles.profile} src="logo512.png"/>
            {read === "0" ? (<>
            <div className={styles.nameandlast}>
                <h2 className={styles["heading2-unread"]}>{props.contactName}</h2>
            <h3 className={styles["heading3-unread"]}>{props.lastMessage}</h3>
            </div>
            <div className={styles["text-unread"]}>
                <h3 className={styles["heading3-unread"]}>{props.time}</h3>
                </div>
            </>) : (<>
                <div className={styles.nameandlast}>
                <h2 className={styles["heading2-read"]}>{props.contactName}</h2>
            <h3 className={styles["heading3-read"]}>{props.lastMessage}</h3>
            </div>
            <div className={styles["text-read"]}>
                <h3 className={styles["heading3-read"]}>{props.time}</h3>
                </div>
            </>)}
            </div>
        </div>
    )
}