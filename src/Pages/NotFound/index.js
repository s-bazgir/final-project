
import { Fragment } from "react";
import  "./style.css";
import Header from "../../Componenets/Header";
import Footer from "../../Componenets/Footer";

export default function NotFound(){

  return (   
        <Fragment>
           <Header />
            <div className="notFound">
              <img src="assets/images/notFound.jpg" />
            </div>
           <Footer />
        </Fragment>   
  );
};


