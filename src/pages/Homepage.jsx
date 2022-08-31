import React, { useEffect } from "react";
import { HeroSection } from "../components/heroSection/HeroSection";
import { FeaturedMovie } from "../components/featuredMovie/FeaturedMovie";
import { NewArrival } from "../components/newArrival/NewArrival";
import { PopPersons } from "../components/popPersons/PopPersons";
import { Footer } from "../components/footer/Footer";
import { ModalTrailer} from "../components/modalTrailer/ModalTrailer";
import { getHeroMovieThunk } from "../slices/HeroSectionSlice";
import { useSelector, useDispatch } from 'react-redux';




export const Homepage = ()=>{
    const dispatch = useDispatch();
    const { trailer } = useSelector(state => state.heroData.heroObject);
    
  
   
    useEffect(() => {
      dispatch(getHeroMovieThunk('507086'));
  
    }, [dispatch]);
   


    return(
        <>
        <HeroSection/>
        <FeaturedMovie/>
        <NewArrival/>
        <PopPersons/>
        <Footer/>
        <ModalTrailer trailer={trailer}/>
        </>
    )
}