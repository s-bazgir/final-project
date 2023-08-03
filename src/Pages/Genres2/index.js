
import React , { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import ListGroup from '../../Componenets/ListGroup';
import { FaHeart } from "react-icons/fa";
import { Pagination } from 'antd';
import MoviesByGenreInfinit from '../../Componenets/MoviesByGenreInfinit';

export default function Genres2(){
 
    const [loading , setloading] = useState(false);
    const [genres , setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState([]);
    const [totalCount, setTotalCount] = useState(0);  
    const [movies , setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [pageNumber , setPageNumber] = useState(1);
    const [len , setLen] = useState(0);
               
    
    async function getApi(){
                      try{
                      setloading(true);  
                      const response = await axios.get(`https://moviesapi.ir/api/v1/genres`);                  
                      setGenres(response.data);
                      setloading(false);
                      }catch(e){   
                          setloading(false);               
                      }
                    }
  
    useEffect(function(){                 
        getApi();
        },[]);   
        
       
     function handleGenreSelect(genre){
        setselectedGenre(genre);  
        console.log(genre);
        console.log(selectedGenre); 
       }

   
    return (<Fragment>
             <Layout>
              <div className="content">
                <div className="genreList">
                  <ListGroup items={genres}
                              selectedItem={selectedGenre}  // برای رد و بدل داده بین دو کامپوننت است
                              onItemSelect={handleGenreSelect} // اسم متد را به کامپوننت ارسال کردم تا در صورت کلیک اینجا را صدا بزند
                              textProperty = "name" // یک لیست داریم کهه در بیشتر موافع فیلدهای آن نام و شناسه است اما چون ممکن است فرق داشته باشد ما اسم فیلدها را هم پرارامتریزه کردیم
                              valueProperty = "id"
                      />        
                </div>
                <MoviesByGenreInfinit genreId={selectedGenre} /> 
              </div>
             </Layout>
           </Fragment>)
  }
    
    
    
  