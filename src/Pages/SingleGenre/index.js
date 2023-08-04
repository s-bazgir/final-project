import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import { Link, useParams } from "react-router-dom";
import  "./style.css";
import MoviesByGenreInfinit from '../../Componenets/MoviesByGenreInfinit';

export default function SingleGenre(){

  const {id} = useParams();

    return (<Fragment>
             <Layout>
                <div className="container">
                    <MoviesByGenreInfinit genreId={id} />
                </div>
             </Layout>
           </Fragment>)

}