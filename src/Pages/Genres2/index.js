
import React , { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import ListGroup from '../../Componenets/ListGroup';
import MoviesByGenreInfinit from '../../Componenets/MoviesByGenreInfinit';
import MovieItem from '../../Componenets/MovieItem';
import { Link , useParams } from "react-router-dom";

export default function Genres2(){
 
    const [genres , setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState([{id:1 , name: "Crime"}]);
    const [y,setY] = useState();
    const [movies , setMovies] = useState([]);
    
    async function getApi(){
                      try{
                      const response = await axios.get(`https://moviesapi.ir/api/v1/genres`);                  
                      setGenres(response.data);
                      }catch(e){   
                                        
                      }
                    }

    useEffect(function(){        
      // var we= localStorage.getItem("genre");
      // if(!we){
      // localStorage.setItem("genre",1);
      // }
        getApi();
        },[]);   

        useEffect(function(){   
      
            getApi1();
            },[selectedGenre]);   
        
        
        async function getApi1(){
          try{
            const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${selectedGenre.id}/movies?page={1}`);
            setMovies(response.data.data);
                }catch(e){    
          }
        }        
        useEffect(function(){         
          console.log("hello");
          console.log(selectedGenre);
          getApi1();
          },[selectedGenre]);   
      
      function handleGenreSelect(genre){
        setselectedGenre(genre);  
          // localStorage.setItem("genre",genre.id);
       }

       function loopFilms() {
        return movies.map(function(movie) {
           const {id , poster , title} = movie;
           return(                        
                   <li key={id}>
                       <Link to={`/SingleMovie/${id}`} className="singleMovie">
                          <div className="movieImageHolder"> 
                            <img src={poster} />
                            <div className="movieShade"> 
                              <ul className="shadeInfo">
                                 <li>Year: {movie.year}</li>
                                 <li>Country: {movie.country}</li>
                                 <li>IMDB: {movie.imdb_rating}</li>
                                 <li>Genres: {movie.genres.join(",")}</li>
                               </ul>                                 
                            </div>  
                          </div>
                           <h4>{title}</h4>
                       </Link>    
                   </li>
               )
               }
           )
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
                {/* <div className="hello"> */}
                  {/* <MoviesByGenreInfinit genreId={selectedGenre.id} /> */}
                  
                   <ul>
                       {loopFilms()}
                   </ul>
                {/* </div> */}
              </div>
             {/* </Layout> */}
           </Fragment>)
  }
    
    
    
  