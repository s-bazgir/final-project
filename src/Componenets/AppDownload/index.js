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
                    <a href="https://r.search.yahoo.com/_ylt=Awr92CYmALtkVxwMk5RXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1690005670/RO=10/RU=https%3a%2f%2fplay.google.com%2f/RK=2/RS=_x3Ssb_aYqJNTFi7i375OXWgASc-">
                        <div className="ax-matn">
                                <img src="../../assets/images/googleplay.png"/>
                                <div className="matn">
                                    <p>Download From </p>
                                    <h4>Google Play</h4>
                                </div>                        
                        </div>
                    </a>
                    <a href="https://cafebazaar.ir/install?l=en">
                        <div className="ax-matn">
                            <img src="../../assets/images/bazar.png" />
                            <div className="matn">
                                <p>Download From </p>
                                <h4>Bazar</h4>
                            </div>
                        </div>
                    </a>    
                    <a href="https://sibche.com/">
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


