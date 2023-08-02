import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import 'swiper/swiper-bundle.min.css';

export default function Slider(){

  const [movies , setMovies] = useState([]);  
  const [selecedSlideIndex, setSelecedSlideIndex] = useState(0);
 
  useEffect(function(){                 
                      getApi();
                  },[]); 

  async function getApi(){
                  try{
                  const response = await axios.get("https://moviesapi.ir/api/v1/movies");
                  setMovies(response.data.data);
                     }catch(e){                  
                  }
                  }
    function loopFilms() {
      return movies.map(function(movie) {
          const {id, poster} = movie;
          return (
              <SwiperSlide>
                <li key={id}>                  
                    <Link to={`/singleMovie/${id}`}>
                        <img src={poster} />
                    </Link>
                </li>
              </SwiperSlide>
          )
      })
    }

    function onSlideChange(swiper){
      setSelecedSlideIndex(swiper.activeIndex);
      }

    function renderSelectedMovie(){
      
      const selectedMovie = movies[selecedSlideIndex];
      if(!selectedMovie){
        return null;
        }
      const {id, title, year, country, genres} = selectedMovie;
      
      return(
          <Fragment>
            <Link to={`/singleMovie/${id}`}>
              <li className="selectedMovieTitle">{title}</li>
              <li className="selectedMovieYear">Year: {year}</li>
              <li className="selectedMovieCountry">Country: {country}</li>
              <li className="selectedMovieGenres">Genres: {genres.join(",")}</li>
            </Link>  
          </Fragment>
        );
    }

  return (
    <div className="slide-movies-list">
      <div className="container">
          <ul className="swiper-holder">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={onSlideChange}
            >
              {loopFilms()}
            </Swiper>
            <ul className="selectedMovie"> 
              {renderSelectedMovie()}
             </ul>
          </ul>        
      </div>
    </div>
  );
};


