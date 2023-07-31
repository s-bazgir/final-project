import { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AppDownload from "../AppDownload";
import '../../assets/css/style.css';

export default function Layout(props){

    return(
        <Fragment>
          <Header/>
            {props.children}
          <AppDownload/>
          <Footer/>
        </Fragment>
    );
}

