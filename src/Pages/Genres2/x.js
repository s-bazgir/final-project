
import { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import axios from "axios";
import  "./style.css";
import ListGroup from '../../Componenets/ListGroup';

export default function Genres2(){
 
    const [loading , setloading] = useState(false);
    const [genres , setGenres] = useState([]);
    const [selectedGenre, setselectedGenre] = useState([]);
    const [movies,setMovies] =useState([]);
    const [totalCount, setTotalCount] = useState(0);  
    
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

    async function getMovieList(genre,pageNumber){

      try{
        let mergeArray =[];
        const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${genre.id}/movies?page=${pageNumber}`);
        const newMovies = response.data.data;
        mergeArray = movies.concat(newMovies);
        setMovies(mergeArray);
        setTotalCount(response.data.metadata.total_count);
        // بررسی آیا تمام فیلم‌ها گرفته شده‌اند یا نه
        if (movies.length < response.data.metadata.total_count) {
          // اگر هنوز کل فیلم‌ها گرفته نشده‌اند، دوباره درخواست بده
          getMovieList(genre, pageNumber + 1);
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات فیلم‌ها:", error);
      }      
  }    
       
     function handleGenreSelect(genre){
        setselectedGenre(genre);   
        getMovieList(genre,1);   
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
               </div>
             </Layout>
           </Fragment>)
  }
    
    
    
  