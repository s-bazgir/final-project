import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import axios from "axios";
// import InfiniteScroll from "react-infinite-scroller";
// import { List } from 'antd';

import { InfiniteScroll, List } from 'antd-mobile';




export default function MoviesByGenreInfinity(props){
    
    const [loading , setloading] = useState(false);
    const [movies , setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber , setPageNumber] = useState(1);
        
  useEffect(function(){                 
                      getApi(1);
                  },[pageNumber]); 

  async function getApi( pageNumber =1){
            if(pageNumber == 1 || hasMore){
                        try{
                        setloading(true)
                        const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${props.genreId}/movies?page=${pageNumber}`);
                        const mergedArray = movies.concat(response.data.data);
                        setMovies(mergedArray);
                        console.log("page_count");
                        console.log(response.data.metadata.page_count);
                        console.log("page_number");
                        console.log(pageNumber);
                        console.log("haseMore");
                        console.log(hasMore);                        
                        console.log(mergedArray);
                        if(pageNumber >= Number(response.data.metadata.page_count))
                            setHasMore(false);
                        else {
                          setHasMore(true);
                        } 
                        setloading(false);
                            }catch(e){    
                        setloading(false);                    
                        }
                        }
                        console.log(hasMore);
                  }
    // function loopFilms() {
    //          return movies.map(function(movie,index) {
    //             const {id , poster , title} = movie;
    //             return(                        
    //                     <li key={id}>
    //                         <Link to={`/SingleMovie/${id}`} className="singleMovie">
    //                            <div className="movieImageHolder"> 
    //                              <img src={poster} />
    //                              <div className="movieShade">                                  
    //                              </div>  
    //                            </div>
    //                             <h4>{title}</h4>
    //                         </Link>    
    //                     </li>
    //                 )
    //                 }
    //             )
    //             }

    function  loadMore(){
        if(hasMore){
            setPageNumber(pageNumber+1);
            getApi(pageNumber);
        }
    }

    return(
        // <Fragment>
        //     <div className="container">
        //         <div className="moviePanel">
        //             <h1 className="genreTitle">{props.genreTitle}</h1>
        //             <ul className="filmList">
        //                 {loopFilms()}
        //             </ul> 
        //         </div>  
        //     </div>  
        <Fragment>
            <List>
            {movies.map((item, index) => (
                <List.Item key={index}>
                <Link to={`/SingleMovie/${item.id}`} className="singleMovie">
                        <div className="movieImageHolder"> 
                            <img src={item.poster} />
                            <div className="movieShade">                                  
                            </div>  
                        </div>
                        <h4>{item.title}</h4>
                    </Link>
                </List.Item>
            ))}
            </List>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
         </ Fragment>

        // <Fragment> 
        //     <InfiniteScroll
        //             initialLoad={false}
        //             pageStart={0}
        //             loadMore={loadMoreData}
        //             hasMore={hasMore}
        //             useWindow={true} // اگر می‌خواهید از اسکرول انتهای صفحه استفاده کنید این مقدار را به true تغییر دهید
        //             >
        //             <List
        //                 dataSource={movies}
        //                 renderItem={(item) => (
        //                 <List.Item key={item.id}>
        //                     {/* اینجا کد نمایش هر آیتم را بنویسید */}
                            
        //                     <Link to={`/SingleMovie/${item.id}`} className="singleMovie">
        //                        <div className="movieImageHolder"> 
        //                          <img src={item.poster} />
        //                          <div className="movieShade">                                  
        //                          </div>  
        //                        </div>
        //                         <h4>{item.title}</h4>
        //                     </Link>
        //                 </List.Item>
        //                 )}
        //             />
        //             </InfiniteScroll>
        // </Fragment>

        // </Fragment>    
        )
    }
  