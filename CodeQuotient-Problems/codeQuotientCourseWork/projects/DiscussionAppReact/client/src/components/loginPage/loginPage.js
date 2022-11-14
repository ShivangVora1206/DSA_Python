import styles from "./style.module.css"
import {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log(username);
    
    function changeUsername(e){

        setUsername(e.target.value);
    }
    
    function changePassword(e){
        setPassword(e.target.value);
    }

    async function  authenticateLogin  () {
        if(username === "" || password === ""){
            alert("Please Fill All fields")
            return
        }
        console.log("button clicked");
        const url = "http://127.0.0.1:8000/login";
        const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username:username, password:password})
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            if(data.status === 200){
                props.setUsername(username);
                navigate("/");
            }else{
                
                navigate("/login");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.container}>
        <div className={styles.card}>
        <h1>Login</h1>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Username</label>
                <input onChange={changeUsername} value={username} className={styles.input}></input>
            </div>
            <div className={styles.innerDiv}>
                <label className={styles.label}>Password</label>
                <input onChange={changePassword} value={password} className={styles.input}></input>
            </div>
            
            <button onClick={authenticateLogin} className={styles.button}>Login</button>
            <p className={styles.bottomtext}>don't have an account ? <a href="/signup">Signup</a></p>
        </div>
        </div>
    )
}