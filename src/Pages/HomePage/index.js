import { Fragment } from "react";
import Layout from '../../Componenets/Layout';
import Slider from '../../Componenets/Slider';
import PanelMoviesByGenre from "../../Componenets/PanelMoviesByGenre";

export default function HomePage(){

    return (<Fragment>
             <Layout>
               {/* HomePage */}
               <Slider/>
               <PanelMoviesByGenre genreId="1" genreTitle="Crime" />
               <PanelMoviesByGenre genreId="7" genreTitle="Fantasy" />
               <PanelMoviesByGenre genreId="15" genreTitle="Animation" />
             </Layout>
           </Fragment>)
}