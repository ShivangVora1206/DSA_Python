import styles from "./styles.module.css"
import ContactElement from "../contactElement/contactElement"
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
const data = [
    {
        groupName : "Contact1",
        lastMessage : {message:"Hello there, I am from SBI", status:1},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact2",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact3",
        lastMessage : {message:"Hello there, I am from SBI", status:1},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact4",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact2",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact3",
        lastMessage : {message:"Hello there, I am from SBI", status:1},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact4",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact2",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact3",
        lastMessage : {message:"Hello there, I am from SBI", status:1},
        time : "12:08",
        profile : "logo512.png"
    },
    {
        groupName : "Contact4",
        lastMessage : {message:"Hello there, I am from SBI", status:0},
        time : "12:08",
        profile : "logo512.png"
    },
    
];

export default function ContactView(props) {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [virtualContacts, setVirtualContacts] = useState([]);
    const [search, setSearch] = useState("");
    console.log(search);
    const [userProfile, setUserProfile] = useState("http://127.0.0.1:8000/default-profile-1.jpg");
    const url = "http://127.0.0.1:8000/getcontacts";
    const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: props.username })
    };
    useEffect(() => {
        const getData = async () => {
            try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            setVirtualContacts(data);
        } catch (e) {
            console.log(e);
        }
        }
        getData()
    }, []);


    useEffect(() => {
        setContacts(virtualContacts);
    }, [virtualContacts]);


    useEffect(() => {
        const Url = "http://127.0.0.1:8000/getUserProfile";
        const Options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: props.username })
        };
        const getData = async () => {
            try {
            const response = await fetch(Url, Options);
            const data = await response.json();
            console.log("profile", data);
            setUserProfile("http://127.0.0.1:8000/"+data.profile);
        } catch (e) {
            console.log(e);
        }
        }
        getData()
    }, []);

    function Logout(){
        localStorage.removeItem("token");
        props.setPreviewState(true)
        navigate("/login");
    }

    function changeSearch(e) {
        setSearch(e.target.value);
        let temp = [];
        for (let i = 0; i < virtualContacts.length; i++) {
        if (virtualContacts[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
            temp.push(virtualContacts[i]);
        }
        }
        console.log(temp);
        setContacts(temp);


    }

    function changePreview(e, gid, gname, gpro){
        // console.log("groupnamesss", gname);
        props.setPreviewState(() => false);
        console.log("default preview set");
        props.socket.emit("contact-pressed", `contact pressed ${gid}`)
        props.setGroupId(gid);
        props.setgroupName(gname);
        props.setgroupProfile(gpro);
        props.socket.emit("join", gid);
    }
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <img src={userProfile}></img>
                <FontAwesomeIcon onClick={Logout} icon={faSquareArrowUpRight} style={{color:"white"}} />
            </nav>
            <input className={styles.searchField} onChange={changeSearch} value={search} placeholder="Search or start a new chat"></input>
            <div className={styles["contacts-container"]}>
                <ul>
                    {contacts.map((value)=>{
                    return <ContactElement onClick={changePreview} read={value.status} groupProfile={value.profile} groupName={value.name} groupid={value._id} contactName={value.name} lastMessage={"last recieved Message"} time={"12:08"}/>
                    })}
                    
                </ul>
            </div>
        </div>
    )
}