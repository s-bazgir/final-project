import { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import MovieInfo from '../../Componenets/MovieInfo';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import  "./style.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import 'swiper/swiper-bundle.min.css';


export default function SingleMovie(props){

  const [loading , setloading] = useState(false);
  const [movie , setMovie] = useState([]);
  const {id} = useParams();
 
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

  function loopFilmImages() {
       if(!movie.images){
        return <SwiperSlide>
                  <li>
                      <img src={movie.poster} style={{width:"100%", height:"80vh", objectFit:"cover"}}/>
                  </li>
                </SwiperSlide>;
        } 
       else{   
      return movie.images.map(function(movieImage) {          
          return (
              <SwiperSlide>
                <li>
                    <img src={movieImage} style={{width:"100%", height:"80vh", objectFit:"cover"}}/>
                </li>
              </SwiperSlide>
          )
          });
       }
     }

  return (
    <Layout>
      <div className="slide-movies-list">
        <div className="container"> 
            <MovieInfo id={id}/>       
            <ul className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {loopFilmImages()}
              </Swiper>
            </ul>                        
        </div>
      </div>
    </Layout>
  );
};


