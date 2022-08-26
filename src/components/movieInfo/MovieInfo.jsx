import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import rating from '../../asset/rating.png';
import { getMovieThunk } from "../../slices/HeroSectionSlice";

import './styles.scss'

export const MovieInfo = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const { heroImages, movie, trailer } = useSelector(state => state.heroData.movieObject);
    

    useEffect(() => {
    dispatch(getMovieThunk(id))
    }, [dispatch]);

  
    
    return(
        <>
        <div className="container movie_page">
            {movie && <img className="movie_poster" src= {`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='poster'/>}
            <div className="movie_info">
            {movie && <div className="movie_page_title"><h3 className="title_name">{movie.title || movie.original_name}</h3>
            <span className="title_date">({movie.release_date.split('-')[0]})</span></div>}
            {movie && <p className="movie_country">{movie.production_countries[0].name}</p>}
            {movie && <div className="movie_rating"> <img src={rating} alt="rating" /> {movie.vote_average?.toFixed(1)}</div>}
            {movie && <div><span className="genre_title">Genre:</span><br/>
            <div className="movie_genre">
            {movie.genres.map((item)=> {
               return(
                <div className="genre_item">{item.name}</div>
               ) 
                } )}
            </div>
           </div>}
            {movie && <p className="movie_description">{movie.overview}</p>}
            </div>
        </div>
        </>

    )
}