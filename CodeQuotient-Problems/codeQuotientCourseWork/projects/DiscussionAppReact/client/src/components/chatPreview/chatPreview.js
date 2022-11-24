import { useEffect, useState, useRef } from "react";
import { Socket } from "socket.io-client";
import ChatBubble from "../chatBubble/chatBubble"
import styles from "./styles.module.css"
import moment from "moment"
import InfiniteScroll from 'react-infinite-scroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
let data = [
    {
        id : "id",
        from : "Contact 2",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:03", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact 2",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:03", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact 2",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:03", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact1",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:05", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact 2",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:03", 
        status : "0"
    },
    {
        id : "id",
        from : "Contact 2",
        message : "message Body",
        groupid : "groupid",
        timestamp : "12:03", 
        status : "0"
    },
]

export default function ChatPreview(props) {
    const messageEl = useRef(null);
    const [messageInput, setMessageInput] = useState("");
    const [chatsArray, setChatsArray] = useState([]);
    const [pagenum, setPagenum] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    console.log("gname", props.groupname);
    console.log("page",pagenum, hasMore);
    const url = `http://127.0.0.1:8000/getconversation/?count=${pagenum}`;
    let today = new Date();
    let dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupid : props.groupid,date:dateTime }),
    };
    
    // window.onload = function(){
    //     window.scrollTo(0, (document.body.offsetHeight-window.innerHeight)/1.5); // (X,Y)
    //   }

    useEffect(() => {
        if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
    }
}, [])


useEffect(() => {
    
    
    const getData = async () => {
        
        try {

            const url = `http://127.0.0.1:8000/getconversation/?count=${pagenum}`;
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("converations", data);
            // data = data.reverse()
            setChatsArray(data.reverse());
            // setChatsArray(data);
            // setPagenum(0);
        } catch (e) {
            console.log(e)
        }
        }
        
        getData()

        return () =>{
            console.log("unmounting")
            setPagenum(0);
            setHasMore(true);
            setChatsArray([]);
        }


    }, [props.groupid]);


    useEffect(()=>{

        props.socket.on("new-chat-from-server", m => {
            let body = JSON.parse(m);
            // setChatsArray((prev)=>[...prev, body]);
            appendNewChat(body, false)
            console.log("append called from socket");
        })
    }, [])

    function saveConversationToDb(chatbody){
        const url = "http://127.0.0.1:8000/addconversation";
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( chatbody )
        };

        const getData = async () => {
            try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("converations", data);
        } catch (e) {
            console.log(e)
        }
        }
        getData()
    }




    function appendNewChat(messageData, flag){
        
        let body = {}
        if(flag){

            body = {
                // id:"id",
                from : props.username,
                message : messageData,
                groupid : props.groupid,
                timestamp : moment()._d.toLocaleString(),
                // status : "0"
            }
            saveConversationToDb(body);
            props.socket.emit("new-chat-from-client", JSON.stringify(body));
        }else{ 
            body = messageData;
        }
        
        setChatsArray((prev)=>[...prev, body]);
        setMessageInput("");
    }

    // console.log(props.groupname);
    // console.log(messageInput);

    function changeInputVal(e){
        
        setMessageInput(e.target.value);
    }




    function onKeyUpHandler(e) {
        if (e.key === "Enter"){
            appendNewChat(messageInput, true);
        }
    }

        const loadFunc = async () => {
        
            try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log("converations", data);
            let temp = chatsArray;
            temp = data.reverse().concat(temp);
            if(!data.length){
                setHasMore(false);
            }
            setChatsArray(temp);
            setPagenum(pagenum + 10);
        } catch (e) {
            console.log(e)
        }
        }

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.profilename}>
                <img src={"http://127.0.0.1:8000/"+props.groupprofile}/>
                <h2 className={styles["heading-2-unread"]}>{props.groupname}</h2>
                </div>
                <FontAwesomeIcon onClick={() => {props.setAddToGroupPopup(true)}} icon={faBars} style={{color:"white"}} />

            </nav>
            <div className={styles.chatbody} ref={messageEl}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
                isReverse={true}
            >
                <ul>
                    {
                        chatsArray.map((value)=>{
                            if(value.from !== props.username){
                                
                            return <li><ChatBubble from={value.from} sender={false} message={value.message} time={value.timestamp}/></li>
                            }
                            return <li><ChatBubble from={value.from} sender={true} message={value.message} time={value.timestamp}/></li>
                        })
                    }
                </ul>
                </InfiniteScroll>
            </div>
            <div className={styles.messageInputDiv}>
                
                <input onKeyUp={onKeyUpHandler} onChange={changeInputVal} value={messageInput} className={styles.messageInput} placeholder="Type a message"></input>
            </div>
        </div>
    )
}