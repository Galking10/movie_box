import React from "react";
import { HeroSection } from "../components/heroSection/HeroSection";
import { FeaturedMovie } from "../components/featuredMovie/FeaturedMovie";
import { NewArrival } from "../components/newArrival/NewArrival";



export const Homepage = ()=>{



    return(
        <>
        <HeroSection/>
        <FeaturedMovie/>
        <NewArrival/>
        </>
    )
}