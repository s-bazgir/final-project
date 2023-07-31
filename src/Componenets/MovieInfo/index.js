import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import  "./style.css";
import { FaCalendar,FaFilm, FaClock, FaPeopleArrows, FaGlobe, 
         FaRegStar, FaImdb, FaGift, FaVoteYea, FaBandcamp,
         FaFigma, FaEllo, FaRegNewspaper, FaFileDownload, FaPlayCircle
          } from "react-icons/fa";

export default function MovieInfo(props){

  const [loading , setloading] = useState(false);
  const [movie , setMovie] = useState([]);
  const {id} = props;
 
  async function getApi(){
                  try{
                  setloading(true);  
                  const response = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);                  
                  setMovie(response.data);
                  setloading(false);
                  }catch(e){   
                      setloading(false);               
                  }
                  }
  
    useEffect(function(){                 
                    getApi();
                },[id]);        
   

  return (
    <Fragment>
        <div className="moviePanel">            
            <div className="movieTitle">
                <h2>Wath {movie.title}</h2>
                <span className="movieTitleIcon"><FaFileDownload /></span>
            </div>
            <div className="movieDetail" style={{backgroundImage: `url(${!movie.images ? movie.poster : movie.images[0]  })`}}>
                <div className="column column1">
                    <div className="moviePoster">
                        <img src={movie.poster} />                        
                        <FaPlayCircle className="playButton"/>
                        <div className="moviePosterShade">
                        </div>
                    </div>
                </div>
                <div className="column column2">
                <ul className="fieldGroup">
                    <li className="icon"><FaFilm /></li>
                    <li className="lable">Genre: </li>
                    <li className="lableValues">
                          {/* {movie.genres.join(",")} */}
                    </li>               
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaCalendar /></li>
                    <li className="lable">Year: </li>
                    <li className="lableValues">{movie.year}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaClock /></li>
                    <li className="lable">Time: </li>
                    <li className="lableValues">{movie.runtime}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaEllo /></li>
                    <li className="lable">Director: </li>
                    <li className="lableValues">{movie.director}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaPeopleArrows /></li>
                    <li className="lable">Actors: </li>
                    <li className="lableValues">{movie.actors}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaBandcamp /></li>
                    <li className="lable">Type: </li>
                    <li className="lableValues">{movie.type}</li>
                </ul>
                </div>    
                <div className="column column3">
                <ul className="fieldGroup">
                    <li className="icon"><FaGlobe /></li>
                    <li className="lable">Country: </li>
                    <li className="lableValues">{movie.country}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaRegStar /></li>
                    <li className="lable">meta score: </li>
                    <li className="lableValues">{movie.metascore}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaImdb /></li>
                    <li className="lable">imdb_rate: </li>
                    <li className="lableValues">{movie.imdb_rating}</li>
                </ul> 
                <ul className="fieldGroup"> 
                    <li className="icon"><FaVoteYea /></li>
                    <li className="lable">imdb_votes: </li>
                    <li className="lableValues">{movie.imdb_votes}</li>
                </ul>
                <ul className="fieldGroup">  
                    <li className="icon"><FaFigma /></li>
                    <li className="lable">rated: </li>
                    <li className="lableValues">{movie.rated}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaRegNewspaper /></li>
                    <li className="lable">plot: </li>
                    <li className="lableValues">{movie.plot}</li>
                </ul>  
                <ul className="fieldGroup">
                    <li className="icon"><FaGift /></li>
                    <li className="lable">awards: </li>
                    <li className="lableValues">{movie.awards}</li>
                </ul>
                </div>                
            </div>
        </div>        
    </Fragment>
  );
};


