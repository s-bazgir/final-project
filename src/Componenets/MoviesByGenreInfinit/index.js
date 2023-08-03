import React, { Fragment, useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import  "./style.css";
import axios from "axios";
import  InfiniteScroll  from "react-infinite-scroll-component";
import MovieItem from '../../Componenets/MovieItem';


export default function MoviesByGenreInfinit(props){

    const genreId = props.genreId;
    const [movies , setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [pageNumber , setPageNumber] = useState(1);
    const [len , setLen] = useState(0);
        
  useEffect(function(){                 
                      getApi();
                  },[]); 

  async function getApi( ){
                  if(hasMore){
                        try{
                        const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${genreId}/movies?page=${pageNumber}`);
                        const mergedArray = movies.concat(response.data.data);
                        setLen(response.data.metadata.total_count);
                        setMovies(mergedArray);                      
                        setPageNumber(pageNumber+1);
                        if(response.data.data.length === 0 )
                           setHasMore(false);
                            }catch(e){    
                        }
                        }
                      }
        return(        
        <Fragment>                           
            <div className="content">                
                <ul className="genreFilmList">
                    {movies.map((item, index) => (
                    <li className="singleGenreFilmList" key={index}>
                        <Link to={`/SingleMovie/${item.id}`} className="singleMovie">
                          <MovieItem movie={item} />
                        </Link>
                    </li>
                    ))}
                </ul>
                <div className="buttonHolder">
                    <button onClick={getApi} className="load-more regular-btn">{hasMore ? "load more" : "no more items"}</button>
                </div>
            </div>

        </Fragment>
    )      
    }
  