import { useState } from "react"
import ChatPreview from "../chatPreview/chatPreview"
import styles from "./styles.module.css"
export default function ChatView(props) {
    return (
        <div className={styles.container}>
        {props.showDefault ? (
            <img className={styles["default-img"]} src="chat-default.png"/>
        ) : (<ChatPreview setAddToGroupPopup={props.setAddToGroupPopup} groupname={props.groupname} groupprofile={props.groupprofile} username={props.username} groupid={props.groupid} socket={props.socket}/>)}
            
        </div>
    )
}