import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieData, getMovieImages, getTrailer } from "../api/api";


const initialState = {
    heroObject: {},
    movieObject: {},

}



export const getHeroMovieThunk = createAsyncThunk(
    'heroObject/getHeroObject', 
    async (id, {rejectWithValue, dispatch}) =>{
        try {
            const object = {}
            const images = await getMovieImages(id)
            object.heroImages = images.data.backdrops[2].file_path
            const movie = await getMovieData(id)
            object.movie = movie.data
            const trailer = await getTrailer(id)
            object.trailer = trailer.data.results[7].key
            dispatch(setHeroMovieObject(object))
        } catch (error) {
            console.log(error)
        }
        
    }
)

export const getMovieThunk = createAsyncThunk(
    'movieObject/getMovieObject', 
    async (id, {rejectWithValue, dispatch}) =>{
        try {
            const object = {}
            const images = await getMovieImages(id)
            object.heroImages = images.data.backdrops[2].file_path
            const movie = await getMovieData(id)
            object.movie = movie.data
            const trailer = await getTrailer(id)
            object.trailer = trailer.data.results[7].key
            dispatch(setMovieObject(object))
        } catch (error) {
            console.log(error)
        }
        
    }
)

export const heroDataSlice = createSlice({
    name: 'heroImage',
    initialState,
    reducers:{
        setHeroMovieObject: (state, actions)=>{
            state.heroObject = actions.payload
            
        },
        setMovieObject: (state, actions)=>{
            state.movieObject = actions.payload
            
        },
    },
    extraReducers:{
        [getHeroMovieThunk.fulfilled]:()=>console.log('fulfilled'),
        [getHeroMovieThunk.pending]:()=>console.log('pending'),
        [getHeroMovieThunk.rejected]:()=>console.log('rejected'),
    }
})

export const {setMovieObject, setHeroMovieObject} = heroDataSlice.actions


export default heroDataSlice.reducer