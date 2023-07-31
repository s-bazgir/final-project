import { Fragment } from "react";
import { Link } from "react-router-dom";
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

export default function Slider2(props){

  const imageList = props;
 
    function loopImages() {
      return imageList.map(function(image) {
          const {id, poster} = movie;
          return (
              <SwiperSlide>
                <li key={id}>                  
                    <Link to={`/singleMovie/${id}`}>
                        <img src={poster} style={{width:"100%", height:"80vh", objectFit:"cover"}}/>
                    </Link>
                </li>
              </SwiperSlide>
          )
      })
    }

  return (
    <div className="slide-movies-list">
      <div className="container">
          <ul className="swiper-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {loopFilms()}
            </Swiper>
          </ul>        
      </div>
    </div>
  );
};


