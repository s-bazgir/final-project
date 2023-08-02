import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import { Link, useParams } from "react-router-dom";
import  "./style.css";
import MoviesByGenreInfinity from '../../Componenets/MoviesByGenreInfinity';

export default function SingleGenre(){

  const {id} = useParams();

    return (<Fragment>
             <Layout>
                <div className="container">
                  <MoviesByGenreInfinity genreId={id} />
                </div>
             </Layout>
           </Fragment>)

}