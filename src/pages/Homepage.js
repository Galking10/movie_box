import React, { useEffect } from "react";
import { Header } from "../components/header/Header";
import { useDispatch } from "react-redux";
import { getHeroMovieThunk } from "../slices/HeroSectionSlice";
import { HeroSection } from "../components/heroSection/HeroSection";
import { FeaturedMovie } from "../components/featuredMovie/FeaturedMovie";



export const Homepage = ()=>{
// const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(getHeroMovieThunk())
  
// }, [dispatch])


    return(
        <>
        <Header/>
        <HeroSection/>
        <FeaturedMovie/>
        </>
    )
}