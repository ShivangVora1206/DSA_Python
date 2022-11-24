import styles from "./styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import ContactElement from "../contactElement/contactElement";
import UserContactElement from "../userContactElement/UserContactElement";

export default function AddToGroupPopup(props) {

    const [contacts, setContacts] = useState([]);
    const [virtualContacts, setVirtualContacts] = useState([]);
    const [search, setSearch] = useState("");
    console.log(search);
    const url = "http://127.0.0.1:8000/getUserContacts";
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


    function changeSearch(e) {
        setSearch(e.target.value);
        let temp = [];
        for (let i = 0; i < virtualContacts.length; i++) {
        if (virtualContacts[i].username.toLowerCase().includes(e.target.value.toLowerCase())) {
            temp.push(virtualContacts[i]);
        }
        }
        console.log(temp);
        setContacts(temp);


    }

    function addToGroup(e){
        
        console.log(props.groupid, e.target.innerText);
        const url = "http://127.0.0.1:8000/addUserToGroup";
        const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: e.target.innerText, groupid: props.groupid})
        };
        const getData = async () => {
            try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            let temp = virtualContacts.filter((contact) => contact.username !== e.target.innerText);
            setVirtualContacts(temp);
            
        } 
        catch (e) {
            console.log(e);
        }
        }
        getData()

    }

    return props.onFlag ? (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.nav}>
					<h1 className={styles.cardtitle}>Add to group</h1>
					<FontAwesomeIcon
						onClick={() => {
							props.setAddToGroupPopup(false);
						}}
						icon={faXmark}
						style={{ color: "white" }}
					/>
				</div>
				<input
					onChange={changeSearch}
					className={styles.searchField}
					placeholder="Search a name"
				></input>
				<div className={styles["contacts-container"]}>
					<ul>
						{contacts.map((value) => {
							return (
								<UserContactElement
									onClick={addToGroup}
									userProfile={value.profilepic}
									userName={value.username}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}