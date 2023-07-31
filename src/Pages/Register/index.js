import { useState, useEffect , Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Componenets/Layout";
import  "./style.css";
import axios from "axios"; 

export default function Register(){

  async function register(){
    try{
        const userName= document.getElementById("userName").value;            
        const email= document.getElementById("Email").value;
        const password= document.getElementById("Password").value;
       
        await axios.post("https://moviesapi.ir/api/v1/register", 
                          { email: email,
                            name: userName,
                            password: password} 
                            //,
                            // {
                            //     headers: {
                            //       'content-type': 'application/json'
                            //     }
                            //   }
                              );
               
    }catch(error){
       console.log(error);
    }
}
return(
      <Layout>
        <Fragment>
              <div className="register-div">
                <h1>Register</h1>
                <div className="fieldGroup">
                    <p>User Name: </p>
                    <input id="userName"></input>
                </div>
                <div className="fieldGroup">
                    <p>Email Address: </p>
                    <input id="Email" type="email"></input>
                </div>
                <div className="fieldGroup">
                    <p>Password: </p>
                    <input id="Password" type="password"></input>
                </div>
                <div className="fieldGroup">
                    <p>Repeat Password: </p>
                    <input id="r-Password" type="password"></input>
                </div>
                <br></br>
                <button id="register-btn" className="regular-btn" onClick={register}>Register</button>
                <br/>
                <Link to="/">
                    <button id="homePage-btn" className="other-btn">Home Page</button>
                </Link>
              </div>
            </Fragment>
      </Layout>
)
}