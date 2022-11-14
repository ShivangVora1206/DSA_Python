import styles from "./styles.module.css"
import {useState, useEffect} from "react";
export default function SignUpPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [file, setFile] = useState();
    console.log(username, email, phone, password, file);
    
    function changeUsername(e){
        setUsername(e.target.value);
    }
    
    function changePassword(e){
        setPassword(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }
    function changePhone(e) {
        setPhone(e.target.value);
    }
    function changeFile(e) {
        setFile(e.target.files[0]);
    }

    function signUp(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/signup';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("phone", phone);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        fetch(url, {
            method: 'POST',
            body: formData,
            config,
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
            })
        };

    

    return (
        <div className={styles.container}>
        <div className={styles.card}>
        <h1>signup</h1>
        <form  className={styles.form} onSubmit={signUp}>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Username</label>
                <input onChange={changeUsername} value={username} className={styles.input}></input>
            </div>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Email</label>
                <input type="email" onChange={changeEmail} value={email} className={styles.input}></input>
            </div>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Phone Number</label>
                <input onChange={changePhone} value={phone} className={styles.input}></input>
            </div>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Password</label>
                <input onChange={changePassword} value={password} className={styles.input}></input>
            </div>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Profile Picture</label>
                <input type="file" name="profile" onChange={changeFile} className={styles.input}></input>
            </div>
            
            <button type="submit" className={styles.button}>Login</button>
            </form>
            <p className={styles.bottomtext}>already have an account ? <a href="/login">Login</a></p>
        </div>
        </div>
    )
}