import React from 'react';
import './App.css';
import fire from './fire';
// import {Login} from './Login'

function App(id) {
  
  console.log(id)
  // var myId=id.id;
  var key = 1;
  var sendMessage = () => {
    var message = document.getElementById("message");
    var messages = {
      message: message.value
    }
    console.log(id)
    message.value = "";
    fire.database().ref('messages/' + id.id + '/' + key).push(messages)
    key +=1
    fire.database().ref('messages/').on('child_added',function(data){
      console.log(data.val().length)
      console.log(data.val())
    })
  }
  return (
    <div className="App">
        <label htmlFor="message">Message:</label>
        <input id = "message" className='input' type = "text" placeholder = "Enter your message"/>
        <button onClick = {sendMessage}>Send</button>
        {/* <Login/> */}
    </div>
  );
  }
export default App;
