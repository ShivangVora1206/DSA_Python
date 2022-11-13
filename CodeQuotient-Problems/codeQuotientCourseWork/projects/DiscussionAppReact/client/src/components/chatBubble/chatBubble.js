import styles from "./styles.module.css"

export default function ChatBubble(props) {
    let time = props.time;
    console.log(time);
    time = time.slice(11, 16);
    // time = time.split(":");
    // time = [(""+(parseInt(time[0])+5)), (""+(parseInt(time[1])+30))].join(":")
    return (
        <>
        {props.sender ? (
            <div className={styles.containerme}>
            <p className={styles.username}>{props.from}</p>
            <p className={styles.meesagebody}>{props.message}</p>
            <h4 className={styles.time}>{time}</h4>
            </div>
        ) : (
            <div className={styles.container}>
            <p className={styles.username}>{props.from}</p>
            <p className={styles.meesage}>{props.message}</p>
            <h4 className={styles.time}>{time}</h4>
            </div>
        )}
        </>
    )
}