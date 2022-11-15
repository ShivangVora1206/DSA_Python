import { useEffect, useState } from 'react';
import styles from './App.module.css';
import ChatView from './components/chatView/chatView'
import ContactView from './components/contactView/contactView'
import io from "socket.io-client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from './components/loginPage/loginPage';
import SignUpPage from './components/signupPage/signupPage';
const socket = io.connect("http://127.0.0.1:8000");
socket.on("from-server", m =>{
  console.log(m);
})
function App(props) {
  const [showDefault, setShowDefault] = useState(true);
  // const [username, setUsername] = useState(props.username);
  const [groupid, setgroupId] = useState("");
  const [groupname, setgroupName] = useState("");
  const [groupprofile, setgroupProfile] = useState("default-profile-1.png");
  const [username, setUsername] = useState("");
  const [flag, setFlag] = useState(false);

useEffect(()=>{
  const token = localStorage.getItem("token");
  if(token){
    setFlag(true);
    setUsername(token);
  }
}, [])

  console.log("groupid", groupid);
  return (

    <BrowserRouter>
      <Routes>

      <Route path="/" element={
        flag ? (<div className={styles.container}>
      <ContactView setPreviewState={setShowDefault} username={username} groupname={groupname} setgroupName={setgroupName} setgroupProfile={setgroupProfile} groupid={groupid} setGroupId={setgroupId} socket={socket}/>
      <ChatView username={username} groupid={groupid} groupname={groupname} groupprofile={groupprofile} setgroupName={setgroupName} setGroupId={setgroupId} showDefault={showDefault} socket={socket}/>
      </div>) : (<LoginPage setFlag={setFlag} setUsername={setUsername}/>)
      } />
      
      
      <Route path="/login" element={<LoginPage setFlag={setFlag} setUsername={setUsername}/>}/>

      <Route path="/signup" element={<SignUpPage/>}/>

      </Routes>
      
    </BrowserRouter>


  );
}

export default App;
