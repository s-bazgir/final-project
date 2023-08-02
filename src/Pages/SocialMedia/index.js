
import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import  "./style.css";
import { FaArrowRight, FaBatteryFull, FaEnvelope, FaGlobe, FaLocationArrow, FaMap, FaPhone, FaSearchLocation, FaSignal, FaWifi } from "react-icons/fa";

export default function SocialMedia(){

    return (<Fragment>
             <Layout>
               <div className="socialMediaPart"> 
                     <ul className="mobileHeader">
                        <li className="time">4:25</li>
                        <li className="setting">
                            <ul className="settingDetail">
                                <FaSignal/>
                                <FaWifi />
                                <FaBatteryFull />
                            </ul>
                        </li>
                     </ul>
                </div>
             </Layout>
           </Fragment>)
}