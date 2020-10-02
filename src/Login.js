import React from 'react'
import App from './App'
import fire from './fire'

export const Login = () => {
    
    const [login,setLogin] = React.useState(true)
    const [id,setId] = React.useState('')
    var myId = ''
    var loginId = (e)=>{
        myId = e.target.value 
    }    
    
    const loginCredentials = ()=>{
        setLogin(!login)
        setId(myId)
    // fire.database().ref('messages/').push(id.id)
    }
    if (login===true) 
    return (
        <div>
        <label htmlFor='login'></label>   
        <input id='login' className='input' type = 'text' placeholder = 'Please Enter Your Name' onChange = {loginId}></input>
        <button onClick={loginCredentials}>Submit</button>
        </div>
    )

    else return <App id={id}/>
}
