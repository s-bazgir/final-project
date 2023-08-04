
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
        getApi();
        },[]);   
        
    // useEffect(() => {
    //   console.log("Selected Genre changed: ", selectedGenre);          
    // }, [selectedGenre]);
        
     function handleGenreSelect(genre){
        setselectedGenre(genre);  
       }
       function loopItems() {
        return(
             genres.map(function(item) {
              return(<li onClick={handleGenreSelect}
                         key={item.id}
                         className={item === selectedGenre? "list-group-item active" : "list-group-item"}
                      >{item.name}</li>)
                  }
              )
        );
       }   
    return (<Fragment>
             {/* <Layout> */}
              <div className="allGenresMovies">
                <div className="genreList">
                    <ul className="list-group">
                    {loopItems()}           
                    </ul>        
                </div>
                <div className="hello">
                  <MoviesByGenreInfinit genreId={selectedGenre.id} />
                </div>
              </div>
             {/* </Layout> */}
           </Fragment>)
  }
    
    
    
  