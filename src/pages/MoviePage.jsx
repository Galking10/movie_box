import React from "react";
import { ActorsByMovie } from "../components/actorsByMovie/ActorsByMovie";
import { Footer } from "../components/footer/Footer";
import { MovieInfo } from "../components/movieInfo/MovieInfo";
import { Header } from '../components/header/Header.jsx'


export const MoviePage = ()=>{
    
    return(
        <>
        <Header background={'#e2e2e2'}/>
        <MovieInfo/>
        <ActorsByMovie/>
        <Footer/>
        </>

    )
}