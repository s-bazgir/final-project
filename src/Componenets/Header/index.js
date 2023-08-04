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

function handleChangeTheme(){
  const themSite=localStorage.getItem("themSite");
    
  const root = document.documentElement;
   
  if(themSite){
              if (themSite === "1") {
                root.style.setProperty("--background-color", "yellow");
                localStorage.setItem("themSite" , "2");
              } else if (themSite === "2") {
                root.style.setProperty("--background-color", "red");
                localStorage.setItem("themSite" , "1");
              }
            }
  else{
    localStorage.setItem("themSite" , "1");
   }
 

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
                     <div className="searchPart">
                      <input type="text" 
                              className="searchBox" 
                              placeholder="Please enter key words..."
                              onChange={onSearch}>                       
                      </input>
                      <ul className="searchResult">
                        {result.length === 0 ? emptySearchResult() : renderSearchResult()}
                      </ul> 
                     </div> 
                   </li>
                 </ul>
             </li>
             <li>
                 <ul className="accountMenu">
                   <li>
                    <Link to="/buy" className="buy">Buy</Link>
                   </li>
                   <li>
                     <button className="changeThemeBtn" onClick={handleChangeTheme}>changeTheme</button>                      
                   </li>
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