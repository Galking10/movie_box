import {configureStore} from '@reduxjs/toolkit'
import ActorsByMovieSlice from '../slices/ActorsByMovieSlice'
import heroDataSlice  from '../slices/HeroSectionSlice'
import MoviesSlice from '../slices/MoviesSlice'
import NewArrivalSlice from '../slices/NewArrivalSlice'
import PersonsSlice from '../slices/PersonsSlice'

export const store = configureStore({
    reducer:{
        heroData: heroDataSlice,
        moviesData: MoviesSlice,
        newArrivalData: NewArrivalSlice,
        personsData: PersonsSlice,
        actorsData: ActorsByMovieSlice,
    }
})