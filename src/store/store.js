import {configureStore} from '@reduxjs/toolkit'
import heroImageSlice  from '../slices/HeroSectionSlice'

export const store = configureStore({
    reducer:{
        heroData: heroImageSlice,
    }
})