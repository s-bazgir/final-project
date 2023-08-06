import { Fragment } from "react";
import  "./style.css";

export default function AppDownload(){

  return(
    <Fragment>
     <div className="appDownload">   
        <div className="container">
            <div className="holderAppDownload">
                <div className="about">
                <h3>About Us:</h3> This Website is for showing films and serials with reserving Copyright....
                <p>Download App</p>
                </div>
                <div className="downloadPart">
                    <a target="_blank" href="https://play.google.com/">
                        <div className="ax-matn">
                                <img src="../../assets/images/googleplay.png"/>
                                <div className="matn">
                                    <p>Download From </p>
                                    <h4>Google Play</h4>
                                </div>                        
                        </div>
                    </a>
                    <a href="https://cafebazaar.ir/install?l=en" target="_blank">
                        <div className="ax-matn">
                            <img src="../../assets/images/bazar.png" />
                            <div className="matn">
                                <p>Download From </p>
                                <h4>Bazar</h4>
                            </div>
                        </div>
                    </a>    
                    <a target="_blank" href="https://sibche.com/">
                        <div className="ax-matn">
                            <img src="../../assets/images/sibche.png" />
                            <div className="matn">
                                <p>Download From </p>
                                <h4>Sibche</h4>
                            </div>                        
                        </div>
                    </a>    
                </div>                
            </div>
        </div>  
      </div>
    </Fragment>
  )

}


