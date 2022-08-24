import React from "react";
import { HeroSection } from "../components/heroSection/HeroSection";
import { FeaturedMovie } from "../components/featuredMovie/FeaturedMovie";
import { NewArrival } from "../components/newArrival/NewArrival";
import { PopPersons } from "../components/popPersons/PopPersons";
import { Footer } from "../components/footer/Footer";



export const Homepage = ()=>{



    return(
        <>
        <HeroSection/>
        <FeaturedMovie/>
        <NewArrival/>
        <PopPersons/>
        <Footer/>
        </>
    )
}