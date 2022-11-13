import styles from "./style.module.css"

export default function LoginPage(props) {
    return (
        <div className={styles.container}>
        <div className={styles.card}>
            <label className={styles.label}>Username</label>
            <input className={styles.input}></input>
            <label className={styles.label}>Password</label>
            <input className={styles.input}></input>
        </div>
        </div>
    )
}