
import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import  "./style.css";
import { FaBatteryFull, FaDotCircle, FaSignal, FaWifi } from "react-icons/fa";
// import icon3 from "../../../public/assets/images/icon3.png";

export default function SocialMedia(){

    return (<Fragment>
             <Layout>
               <div className="socialMediaPart"> 
                 <div className="mobileScreen">
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
                     <div className="mobileBody">
                        <div className="c1">
                            <div className="c2">
                                <div className="c3">
                                    <div className="c4">
                                        <FaDotCircle  className="center"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="addresses">
                          <li className="address">Instagram: @SamaFilm</li>                          
                          <li className="address">Telegram: @SamaFilm</li>                          
                          <li className="address">WhatsApp: @SamaFilm</li>
                        </ul>
                        {/* <img src="../../../public/assets/images/icon3.png" /> */}
                     </div>
                 </div>
                </div>
             </Layout>
           </Fragment>)
}