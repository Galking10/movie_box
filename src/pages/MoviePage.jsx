import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import rating from '../asset/rating.png';
import { getMovieThunk } from "../slices/HeroSectionSlice";


export const MoviePage = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const { heroImages, movie, trailer } = useSelector(state => state.heroData.movieObject);
    

    useEffect(() => {
    dispatch(getMovieThunk(id))
    }, [dispatch]);

  
    
    return(
        <>
          {/* <div className="movie_item">
            <img className="poster" src= {`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='poster'/>
            <div className="rating"> <img src={rating} alt="rating" />{movie.vote_average?.toFixed(1)}</div>
            <h3>{movie.title || movie.original_name}</h3>
            <p className="country_date">{movie.release_date}</p>
            <p className="country_date">{movie.origin_country}</p>
        </div> */}
        </>
    )
}