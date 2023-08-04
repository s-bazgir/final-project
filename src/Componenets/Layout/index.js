import { Fragment ,useEffect} from "react";
import Header from "../Header";
import Footer from "../Footer";
import AppDownload from "../AppDownload";
import '../../assets/css/style.css';

export default function Layout(props){


  // useEffect(()=>{
  //   const t=localStorage.getItem("t");
    
  //   const root = document.documentElement;
  //   if (t === "1") {
  //     root.style.setProperty("--background-color", "yellow");
  //   } else if (t === "2") {
  //     root.style.setProperty("--background-color", "red");
  //   }
  //   },[]);
    

    return(
        <Fragment>
          <Header/>
            {props.children}
          <AppDownload/>
          <Footer/>
        </Fragment>
    );
}

