import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import  "./style.css";
import icon1 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon3.png";
import axios from "axios";
import { FaLightbulb, FaMoon} from "react-icons/fa";


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
  const themSite = localStorage.getItem("themSite");
    
  const root = document.documentElement;
   
  if(themSite){
              if (themSite === "1") {
                root.style.setProperty("--background-color", "#fff");
                root.style.setProperty("--download-background-color", "#F4F4F5");
                root.style.setProperty("--app-background-app-holder", "#BBC5D9");
                root.style.setProperty("--color-hover", "#FFC90E");
                root.style.setProperty("--color-font", "#000");
                root.style.setProperty("--color-search-result", "#A7AAAD");
                root.style.setProperty("--color-serarch-result-active", "aliceblue");
                root.style.setProperty("--color-movie-panel", "#D7E2F9");
                root.style.setProperty("--color-title-icon", "aquamarine");
                root.style.setProperty("--color-movieDetail-hover", "#242424");
                root.style.setProperty("--color-fieldgroup", "#FFC90E");
                root.style.setProperty("--color-load-more", "#AAAAAA");
                root.style.setProperty("--color-scroll", "#F4F4F5");
                root.style.setProperty("--color-sellCard-second", "#00A2E8");
                root.style.setProperty("--color-card-shadow", "#f3f3f3");
                root.style.setProperty("--color-badge-second", "#02cdf1");
                root.style.setProperty("--color-sellCrad-hover", "#fd4516");
                root.style.setProperty("--color-sellCard-second-hover", "#00c8eb");
                root.style.setProperty("--color-swiper-holder", "#CDD7ED");
                root.style.setProperty("--color-bullet", "aqua");
                root.style.setProperty("--color-contact-us", "#0B57CD");
                root.style.setProperty("--color-other-btn", "#99D9EA");                
                root.style.setProperty("--color-register-div", "#CDD7ED"); 
                localStorage.setItem("themSite" , "2");
                document.getElementsByClassName("changeThemeBtn").value = <FaLightbulb />;
              } else if (themSite === "2") {
                root.style.setProperty("--background-color", "#000");
                root.style.setProperty("--download-background-color", "#37383E");
                root.style.setProperty("--app-background-app-holder", "#303030");
                root.style.setProperty("--color-hover", "#FFC90E");
                root.style.setProperty("--color-font", "#FFF");
                root.style.setProperty("--color-search-result", "#A7AAAD");
                root.style.setProperty("--color-serarch-result-active", "aliceblue");
                root.style.setProperty("--color-movie-panel", "#2B2B2B");
                root.style.setProperty("--color-title-icon", "aquamarine");
                root.style.setProperty("--color-movieDetail-hover", "#B4C5E3");
                root.style.setProperty("--color-fieldgroup", "#F8FF1E");
                root.style.setProperty("--color-load-more", "#AAAAAA");
                root.style.setProperty("--color-scroll", "#5E5E5E");
                root.style.setProperty("--color-sellCard-second", "#00A2E8");
                root.style.setProperty("--color-card-shadow", "#f3f3f3");
                root.style.setProperty("--color-badge-second", "#02cdf1");
                root.style.setProperty("--color-sellCrad-hover", "#fd4516");
                root.style.setProperty("--color-sellCard-second-hover", "#00c8eb");
                root.style.setProperty("--color-swiper-holder", "#454545");
                root.style.setProperty("--color-bullet", "aqua");
                root.style.setProperty("--color-contact-us", "#0B57CD");
                root.style.setProperty("--color-other-btn", "#99D9EA");                
                root.style.setProperty("--color-register-div", "#222327");
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
                     <img src={ icon3}/>
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
                     <button className="changeThemeBtn" onClick={handleChangeTheme}>
                      {localStorage.getItem("themSite") === 1 ? <FaLightbulb /> : <FaMoon />}
                     </button>                      
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