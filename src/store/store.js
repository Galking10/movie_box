import {configureStore} from '@reduxjs/toolkit'
import heroDataSlice  from '../slices/HeroSectionSlice'
import MoviesSlice from '../slices/MoviesSlice'
import NewArrivalSlice from '../slices/NewArrivalSlice'

export const store = configureStore({
    reducer:{
        heroData: heroDataSlice,
        moviesData: MoviesSlice,
        newArrivalData: NewArrivalSlice,
    }
})