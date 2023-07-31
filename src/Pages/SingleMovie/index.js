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

  const {id} = useParams();

  return (
    <Layout>
      <div className="singleMovieInfo">
        <div className="container">                    
           <MovieInfo id={id}/>                      
        </div>
      </div>
    </Layout>
  );
};


