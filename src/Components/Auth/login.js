import React,{useState} from "react";
import Auth from "./auth"
import {useHistory} from "react-router-dom"


export default function Login(){

   
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    
  

  function setEmail(e) {
    setemail(e.target.value );
    console.log(email);
  }

  function setPassword(e) {
    setpassword(e.target.value)
    console.log(password);
  }

  const history =  useHistory();

  return (
    
    <div className="page">
      <h2>Login</h2>
      <form className="form login-form" >
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={setEmail}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={setPassword}
          
        />

        <button id="login-btn" 
          onClick={ () => {
            Auth.login( () => {
                if(email.length > 0 && password.length > 0) {
                history.push('/home')
                }
                else{
                  console.log('Invalid Details')
                }
                }
            );
            }
        }
          >Login</button>
      </form>
    </div>
  );
 }
