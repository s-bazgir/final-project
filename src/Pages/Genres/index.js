
import { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import SidebarMenu from "../../Componenets/SidebarMenu";

export default function Genres(){
 
  const [loading , setloading] = useState(false);
  const [genres , setGenres] = useState([]);
  
  async function getApi(){
                    try{
                    setloading(true);  
                    const response = await axios.get(`https://moviesapi.ir/api/v1/genres`);                  
                    setGenres(response.data);
                    setloading(false);
                    }catch(e){   
                        setloading(false);               
                    }
                  }

  useEffect(function(){                 
      getApi();
      },[]);   


  return (<Fragment>
           <Layout>
            <div className="container">
               <SidebarMenu genres={genres} />
            </div>
           </Layout>
         </Fragment>)
}
  
  
  
