import { Fragment } from "react";
import  "./style.css";
import { FaCalendar,FaFilm, FaGlobe, FaImdb, FaFileDownload, FaPlayCircle } from "react-icons/fa";

export default function MovieItem(props){

  const {id, title, poster, year, country, genres, imdb_rating} = props.movie;
  
  return (
    <Fragment>
       <div className="halfContainer">
        <div className="movieItem">            
            <div className="column1">
                <div className="poster">
                    <img src={poster} />
                    <FaPlayCircle className="playButton" />
                    <div className="posterShade"></div>
                </div>
            </div>
            <div className="column2">
                <ul className="filmTitle">
                    <li className="filmName"><h2>Watch {title}</h2></li>
                    <li className="filmImdb">
                        <ul className="fieldGroup">
                                <li className="icon"><FaImdb /></li>
                                <li className="lable">imdb_rate: </li>
                                <li className="lableValues">{imdb_rating}</li>
                        </ul>
                    </li>
                </ul>    
                <ul className="fieldGroup">
                    <li className="icon"><FaFilm /></li>
                    <li className="lable">Genre: </li>
                    <li className="lableValues">
                    {genres.join(",")}
                    </li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaCalendar /></li>
                    <li className="lable">Year: </li>
                    <li className="lableValues">{year}</li>
                </ul>
                <ul className="fieldGroup">
                    <li className="icon"><FaGlobe /></li>
                    <li className="lable">Country: </li>
                    <li className="lableValues">{country}</li>
                </ul>
            </div>
        </div>
       </div>    
    </Fragment>
  );
};


