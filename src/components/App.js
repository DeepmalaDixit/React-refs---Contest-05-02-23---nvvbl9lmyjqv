import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {


  const emailInput = useRef(null)
  const passInput = useRef(null)

const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const [emailVal, setEmailVal] = useState("");
const [passVal, setPassVal] = useState("");



const handleSubmitBtn = () => {
  setEmailVal("");
    setPassVal("");
  if(email.length === 0){
    emailInput.current.focus(); 
  }else if(pass.length === 0){
    passInput.current.focus();
  } else{
    setEmailVal(email);
    setPassVal(pass);
    setEmail("");
  setPass("");
  }
  
}  
//prashant patil

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailInput}  onChange={(e)=> setEmail(e.target.value)}/><br required/>
      Password
      <input id="inputPassword" type="text" value={pass} ref={passInput}  onChange={(e)=> setPass(e.target.value)}/><br required/>
      <button id="submitButton" onClick={()=> handleSubmitBtn()}>Submit</button><br/>
      <p id="emailText">Your Email : {emailVal}</p>
      <p id ="passwordText">Your Password : {passVal}</p>
      
    </div>
  )
}


export default App;
