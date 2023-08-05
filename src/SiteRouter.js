import {createBrowserRouter, RouterProvider }  from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Movies from './Pages/Movies';
import Genres4 from './Pages/Genres4';
import SingleMovie from './Pages/SingleMovie';
import SingleGenre from './Pages/SingleGenre';
import Search  from './Pages/Search';
import Buy from './Pages/Buy';
import NotFound from './Pages/NotFound';
import FAQ from "./Pages/FAQ";
import ContactUs from "./Pages/ContactUs";
import SocialMedia from "./Pages/SocialMedia";



const router = createBrowserRouter([
    {
     path: "/",
     element: <HomePage />,
   },
   {
    path: "/login",
    element: <Login />,
   },
   {
    path: "/register",
    element: <Register />,
  },
  {
   path: "/movies",
   element: <Movies />,
  },
  {
    path: "/genres",
    element: <Genres4 />,
  },
  {
   path: "/singleMovie/:id",
   element: <SingleMovie />,
  },
  {
    path: "/singleGenre/:id",
    element: <SingleGenre />,
  },
  {
   path: "/search",
   element: <Search />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },  
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/socialMedia",
    element: <SocialMedia />,
  },
  {path: "*",
   element: <NotFound />
  }
   ]
   );
   export default function SiteRouter(){
       return(
           <RouterProvider router={router}/>
       )
   }
   