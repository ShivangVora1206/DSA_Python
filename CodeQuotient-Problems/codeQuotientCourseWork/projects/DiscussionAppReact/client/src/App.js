import { useState } from 'react';
import styles from './App.module.css';
import ChatView from './components/chatView/chatView'
import ContactView from './components/contactView/contactView'
import io from "socket.io-client";

const socket = io.connect("http://127.0.0.1:8000");
socket.on("from-server", m =>{
  console.log(m);
})
function App(props) {
  const [showDefault, setShowDefault] = useState(true);
  // const [username, setUsername] = useState(props.username);
  const [groupid, setgroupId] = useState("");
  const [groupname, setgroupName] = useState("");
  console.log("groupid", groupid);
  return (
    <div className={styles.container}>
    <ContactView setPreviewState={setShowDefault} groupname={groupname} setgroupName={setgroupName} groupid={groupid} setGroupId={setgroupId} socket={socket}/>
    <ChatView username={props.username} groupid={groupid} groupname={groupname} setgroupName={setgroupName} setGroupId={setgroupId} showDefault={showDefault} socket={socket}/>
    </div>
  );
}

export default App;
