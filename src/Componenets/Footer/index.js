import { Fragment } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import { FaTwitter,FaInstagram,FaTelegram, FaMoon, FaLightbulb} from "react-icons/fa";




export default function Footer(){

  return (
    <Fragment>
      <div className="footer">
       <div className="container">
        <ul className="bottomMenu">
            <li>
            <ul className="socailMenu">
                <li>
                <Link to={`/???`}>
                  <FaInstagram />                  
                </Link>                    
                </li>
                <li>
                <Link to={`/???`}>
                  <FaTelegram />
                </Link>                    
                </li>
                <li>
                <Link to={`/???`}>
                  <FaTwitter />
                </Link>
                </li>
              </ul>             
            </li>
            <li>
            <ul className="optionMenu">                    
                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="/SocialMedia">Social Media</Link>
                </li>                    
              </ul>
            </li>
        </ul>
       </div> 
      </div>        
    </Fragment>
);
}