import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import axios from "axios";


export default function PanelMoviesByGenre(props){
    
    const [loading , setloading] = useState(false);
    const [movies , setMovies] = useState([]);
 
  useEffect(function(){                 
                      getApi();
                  },[]); 

  async function getApi(){
                  try{
                    setloading(true)
                    const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${props.genreId}/movies?page={1}`);
                    setMovies(response.data.data);
                    setloading(false);
                        }catch(e){    
                    setloading(false);                    
                  }
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
    return(
        <Fragment>
            <div className="container">
                <div className="moviePanel">
                    <Link to={`/SingleGenre/${props.genreId}`} className="singleGenre">                             
                      <h1 className="genreTitle">{props.genreTitle}</h1>
                    </Link>
                    <ul className="filmList">
                        {loopFilms()}
                    </ul> 
                </div>  
            </div>              
        </Fragment>    
        )
    }
  