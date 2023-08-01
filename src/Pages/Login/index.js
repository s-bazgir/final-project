import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Componenets/Layout";
import  "./style.css";
import axios from "axios";


export default function Login(){

  function signIn(){
    try{
        const userName= document.getElementById("userName").value;            
        const password= document.getElementById("Password").value;
        const response =  axios.post("https://moviesapi.ir/oauth/token",
                          {grant_type: password,
                          username: userName,
                          password: password
                          });         
    }catch(e){           
    }
}

return(
      <Layout>
        <Fragment>            
              <div className="enter-div">
                <h1>Sign In</h1>
                <div className="fieldGroup">
                    <div>User Name: </div>
                    <input id="userName"></input>
                </div>
                <div className="fieldGroup">
                    <div>Password: </div>
                    <input id="Password" type="password"></input>
                </div>         
                <div className="line"></div>       
                <button id="enter-btn" className="regular-btn" onClick={signIn}>Sign In</button>                
                <Link to="/Register">
                    <button id="register-btn" className="other-btn" >Register</button>
                </Link>
              </div>
        </Fragment>
      </Layout>
)
}