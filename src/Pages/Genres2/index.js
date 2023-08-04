
import React , { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import ListGroup from '../../Componenets/ListGroup';
import MoviesByGenreInfinit from '../../Componenets/MoviesByGenreInfinit';

export default function Genres2(){
 
    const [genres , setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState([{id:1 , name: "Crime"}]);
    
    async function getApi(){
                      try{
                      const response = await axios.get(`https://moviesapi.ir/api/v1/genres`);                  
                      setGenres(response.data);
                      }catch(e){   
                                        
                      }
                    }
  
    useEffect(function(){   
      
      var we= localStorage.getItem("genre");
      if(!we){
      localStorage.setItem("genre",1);
      }
        getApi();
        },[]);   
        
    useEffect(() => {
      console.log("Selected Genre changed: ", selectedGenre);          
    }, [selectedGenre]);
        
     function handleGenreSelect(genre){
        setselectedGenre(genre);  
        localStorage.setItem("genre",genre.id);
       }
   
    return (<Fragment>
             {/* <Layout> */}
              <div className="allGenresMovies">
                <div className="genreList">
                  <ListGroup items={genres}
                              selectedItem={selectedGenre}  // برای رد و بدل داده بین دو کامپوننت است
                              onItemSelect={handleGenreSelect} // اسم متد را به کامپوننت ارسال کردم تا در صورت کلیک اینجا را صدا بزند
                              textProperty = "name" // یک لیست داریم کهه در بیشتر موافع فیلدهای آن نام و شناسه است اما چون ممکن است فرق داشته باشد ما اسم فیلدها را هم پرارامتریزه کردیم
                              valueProperty = "id"
                      />        
                </div>
                <div className="hello">
                  <MoviesByGenreInfinit genreId={localStorage.getItem("genre")} />
                </div>
              </div>
             {/* </Layout> */}
           </Fragment>)
  }
    
    
    
  