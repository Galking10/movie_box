import React, { useEffect } from "react";
import { ActorsByMovie } from "../components/actorsByMovie/ActorsByMovie";
import { Footer } from "../components/footer/Footer";
import { MovieInfo } from "../components/movieInfo/MovieInfo";
import { Header } from '../components/header/Header.jsx'
import { ModalTrailer } from "../components/modalTrailer/ModalTrailer";
import { useParams } from "react-router-dom";
import { getMovieThunk } from "../slices/HeroSectionSlice";
import { useDispatch, useSelector } from "react-redux";


export const MoviePage = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const { trailer } = useSelector(state => state.heroData.movieObject);
    

    useEffect(() => {
    dispatch(getMovieThunk(id))
    }, [dispatch]);
    
    return(
        <>
        <Header background={'black'}/>
        <MovieInfo/>
        <ActorsByMovie/>
        <Footer/>
        <ModalTrailer trailer={trailer}/>
        </>

    )
}