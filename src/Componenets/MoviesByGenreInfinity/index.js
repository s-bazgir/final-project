import { Fragment, useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import  "./style.css";
import axios from "axios";
import  InfiniteScroll  from "react-infinite-scroll-component";

export default function MoviesByGenreInfinity(props){

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
            <div>
                <InfiniteScroll 
                  dataLength={len}
                  next={getApi}
                  hasMore={hasMore}
                  loader = {<h4> loading ... </h4>}
                  endMessage={<p>no more items ..</p>}
                  >
                    <ul>
                       {movies.map((item, index) => (
                        <li>
                          <Link to={`/SingleMovie/${item.id}`} className="singleMovie">
                            <div className="movieImageHolder"> 
                                {/* <img src={item.poster} /> */}
                                <div className="movieShade">                                  
                                </div>  
                            </div>
                            <h4>{len}</h4>
                            <h4>{index} . </h4>
                            <h4>{item.title}</h4>
                          </Link>
                        </li>
                       ))}
                    </ul>
                  </InfiniteScroll>
            </div>
        </Fragment>
    )      
    }
  