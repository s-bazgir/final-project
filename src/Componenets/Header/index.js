import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import icon1 from "../../assets/images/icon1.png";
import axios from "axios";

export default function Header(){

  const [result,setresult] = useState([]);
   
async function onSearch(e){
     try {
      const value = e.target.value;
      if(value.length === 0)
         {
          emptySearchResult();
        }
      else{   
            makeSerachResultVisible();
            const response = await axios.get("https://moviesapi.ir/api/v1/movies",
            {params: {q:value} });
            setresult(response.data.data);
            }
          }
      catch(error){
         }
    }

function renderSearchResult(){
   return result.map(function(movie){
    const{id , poster, title} = movie;
    return (
      <li key={id}>
        <Link to={`/SingleMovie/${id}`}>  
          <div className="eachReply">
                          <img src={poster}/>
                          <p>{title}</p>
          </div>    
        </Link>
      </li>
    )
  })
}
function emptySearchResult(){
              var serachPart = document.getElementsByClassName("searchResult");
              for(var element of serachPart)
                  element.style.visibility = "hidden";
              return;
            }
function makeSerachResultVisible(){
  var serachPart = document.getElementsByClassName("searchResult");
  for(var element of serachPart)
      element.style.visibility = "visible";
  return;
}

  return (
    <Fragment>        
     <div className="header">
       <div className="container">
         <ul className="topMenu">
             <li>
                 <ul className="filmMenu">
                   <li>
                     <img src={icon1}/>
                   </li>
                   <li>
                     <Link to="/">Home</Link>
                   </li>
                   <li>
                     <Link to="/movies">Movies</Link>
                   </li>
                   <li>
                     <Link to="/genres">Geners</Link>
                   </li>
                   <li>
                     <input type="text" 
                            className="searchBox" 
                            placeholder="Please enter key words..."
                            onChange={onSearch}>                       
                     </input>
                      <ul className="searchResult">
                        {result.length === 0 ? emptySearchResult() : renderSearchResult()}
                      </ul> 
                   </li>
                 </ul>
             </li>
             <li>
                 <ul className="accountMenu">
                   <li></li>
                   <li>
                     <Link to="/login" className="login">Enter / Register</Link>                      
                   </li>
                 </ul>
             </li>
         </ul>
       </div>
     </div>
    </Fragment>
 );
}