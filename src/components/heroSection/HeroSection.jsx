import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroMovieThunk } from "../../slices/HeroSectionSlice";
import './styles.scss'




export const HeroSection = ()=>{
    const dispatch = useDispatch()
   
    const {heroImage, movie} = useSelector((state)=> state.heroData)

    const [first, setfirst] = useState('')
    
    console.log(heroImage)
    console.log(movie)
    
    useEffect(() => {
        dispatch(getHeroMovieThunk())
        
      }, [dispatch])

    //   useEffect(()=>{
    //     heroImage?.backdrops[0].file_path && setfirst(heroImage?.backdrops[0].file_path)
    //   }, [heroImage.backdrops])

    
   
      

    return(
        <>
       <section   style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${first}")` 
          }}>
            <div>
                <h1>{movie?.title}</h1>
                <p>rating: {movie?.vote_average}</p>
                <p>{movie?.overview}</p>
                <button>WATCH TRAILER</button>
            </div>
        </section>
        </>
    )
}