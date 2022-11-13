import { useState } from "react"
import ChatPreview from "../chatPreview/chatPreview"
import styles from "./styles.module.css"
export default function ChatView(props) {
    return (
        <div className={styles.container}>
        {props.showDefault ? (
            <img className={styles["default-img"]} src="chat-default.png"/>
        ) : (<ChatPreview groupname={props.groupname} username={props.username} groupid={props.groupid} socket={props.socket}/>)}
            
        </div>
    )
}