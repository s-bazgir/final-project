import { Fragment , useState, useEffect } from "react";
import Layout from '../../Componenets/Layout';
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination } from 'antd';
import MovieItem from "../../Componenets/MovieItem";
import  "./style.css";

export default function Movies(){

  const [loading , setloading] = useState(false);
  const [movies , setMovies] = useState({data:[] , metadata:{
    current_page:"1",
    page_count:25,
    per_page:10,
    total_count:250
  }});
 // const [pageInfo, setPageInfo] = useState([]);

  
   function getApi(pageNumber = 1){
    setloading(true);  
      axios.get(`https://moviesapi.ir/api/v1/movies`, 
                        {params: {page : pageNumber}}).then(function(response){
                          setMovies(response.data);
                          setloading(false);
                        }); 
      }

useEffect(function(){                 
                  getApi();
              },[]);   

  function onChange(pageNumber){
                            getApi(pageNumber);
                          }
 
  function loopFilms() {
    return movies.data.map(function(movie) {
        const {id, title ,poster, year, country, genre, images} = movie;
        return (
              <li key={id}>                  
                  <Link to={`/singleMovie/${id}`}>
                    <MovieItem movie={movie} />
                  </Link>
              </li>
              )
    })
  }
    return (<Fragment>
             <Layout>
                <div className="container">
                  <ul>
                    {loopFilms()}  
                  </ul>    
                  <div className="paging">             
                    <Pagination defaultCurrent={movies.metadata.current_page} 
                                total={movies.metadata.total_count} 
                                onChange={onChange}
                                >
                                  </Pagination>
                  </div>              
                </div>
             </Layout>
           </Fragment>)
}