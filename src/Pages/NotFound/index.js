// import { Fragment } from "react";
// import Layout from '../../Componenets/Layout';
// import { Link } from "react-router-dom";

// export default function NotFound(){

//     return (<Fragment>
//              <Layout>
//              NotFound
//              </Layout>
//            </Fragment>)
// }

import { Fragment, useEffect, useState } from "react";
import Layout from '../../Componenets/Layout';
import  "./style.css";
import MoviesByGenreInfinity from "../../Componenets/MoviesByGenreInfinity";


export default function NotFound(){

  return (
    <Layout>
        <Fragment>
            <div className="container">
              <MoviesByGenreInfinity genreId='1' />
            </div>
        </Fragment>
    </Layout>
  );
};


