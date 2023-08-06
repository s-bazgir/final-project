
import React , { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import ListGroup from '../../Componenets/ListGroup';
import { Link  } from "react-router-dom";

export default function Genres4(){
 
    const [genres , setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState([{id:1 , name: "Crime"}]);
    const [movies , setMovies] = useState([]);
    const [pageNumber , setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(true);
           
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
          // try{
          //   const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${selectedGenre.id}/movies?page=${pageNumber}`);
          //   setMovies(response.data.data);
          //       }catch(e){    
          // }


          if(hasMore){
            try{
            const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${selectedGenre.id}/movies?page=${pageNumber}`);
            const mergedArray = movies.concat(response.data.data);
            setMovies(mergedArray);                      
            setPageNumber(pageNumber+1);
            if(response.data.data.length === 0 )
               setHasMore(false);
                }catch(e){    
            }
            }

        }        
        useEffect(function(){   
          setHasMore(true);             
          getApi1();
          },[selectedGenre]);   
      
      function handleGenreSelect(genre){
        setselectedGenre(genre);  
          // localStorage.setItem("genre",genre.id);
          document.getElementsByClassName("uu")[0].appendChild=`<MoviesByGenreInfinit genreId=${genre.id} />`
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

         function renderGenre(){
          return(
            genres.map(function(item) {
             return(<li onClick={() => handleGenreSelect(item)} // تغییر اینجا
                        key={item.id}
                        className={item === selectedGenre ? "list-group-item active" : "list-group-item"}
                     >{item.name}</li>)
                 }
             )
                   );      
         }

    return (<Fragment>
             <Layout>
              {/* <div className="allGenresMovies"> */}
                <div className="container">
                  <ul className="genresList">
                    {renderGenre()}
                  </ul>
                </div>         
                  <div className="uu">  
                  </div>                
                  {/* <div className="filmPart"> */}
                    {/* <MoviesByGenreInfinit genreId={selectedGenre.id} /> */}
                    
                    {/* <ul className="filmBox">
                        {loopFilms()}
                    </ul>
                    <div className="buttonHolder">
                     <button onClick={getApi1} className="load-more regular-btn">{hasMore ? "load more" : "no more items"}</button>
                    </div> */}
                  {/* </div> */}
                  {/* </div> */}
              {/* </div> */}
             </Layout>
           </Fragment>)
  }
    
    
    
  