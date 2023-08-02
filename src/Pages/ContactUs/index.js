
import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import  "./style.css";
import { FaArrowRight, FaEnvelope, FaGlobe, FaLocationArrow, FaMap, FaPhone, FaSearchLocation } from "react-icons/fa";

export default function ContactUs(){

    return (<Fragment>
             <Layout>
               <div className="contactPart"> 
                    <h1 className="contactTitle">Contact Us</h1>
                    <input type="text" value="NAME" className="input-name"></input>
                    <input type="email" value="Email" className="input-email"></input>
                    <input type="text" value="MESSAGE" className="input-message"></input>
                    <div className="sendMessage">
                        <span className="btn-text">Send Message </span>
                        <FaArrowRight className="send-btn" />
                    </div>
                    <div className="contactInfo">
                        <div className="fieldGroup">
                            <FaPhone className="contactIcon"/>
                            <span>0214449785</span>
                        </div>
                        <div className="fieldGroup">
                            <FaGlobe className="contactIcon"/>
                            <span>no 144, Grand St</span>
                        </div>
                        <div className="fieldGroup">
                            <FaEnvelope className="contactIcon"/>
                            <span>info@samafilm.com</span>
                        </div>
                    </div>
                </div>
             </Layout>
           </Fragment>)
}