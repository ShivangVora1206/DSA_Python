import { useState } from 'react';
import styles from './App.module.css';
import ChatView from './components/chatView/chatView'
import ContactView from './components/contactView/contactView'
import io from "socket.io-client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
  const [username, setUsername] = useState("");

  console.log("groupid", groupid);
  return (

    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={
        <div className={styles.container}>
      <ContactView setPreviewState={setShowDefault} username={username} groupname={groupname} setgroupName={setgroupName} groupid={groupid} setGroupId={setgroupId} socket={socket}/>
      <ChatView username={username} groupid={groupid} groupname={groupname} setgroupName={setgroupName} setGroupId={setgroupId} showDefault={showDefault} socket={socket}/>
      </div>
      } />
      
      <Route path="/login" element={<LoginPage setUsername={setUsername}/>}/>

      <Route path="/signup" element={<SignUpPage/>}/>

      </Routes>
      
    </BrowserRouter>


  );
}

export default App;
