import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieData, getMovieImages } from "../api/api";


const initialState = {
    heroImages: {},
    movie: {},
}

export const getHeroMovieThunk = createAsyncThunk(
    'heroImage/getHeroImage',
    async (_, {rejectWithValue, dispatch}) =>{
        try {
            const images = await getMovieImages('766507')
            dispatch(setHeroImage(images.data)) 
            const movie = await getMovieData('766507')
            dispatch(setMovie(movie.data))
        } catch (error) {
            console.log(error)
        }
        
    }
)

export const heroImageSlice = createSlice({
    name: 'heroImage',
    initialState,
    reducers:{
        setMovie: (state, actions)=>{
            state.movie = actions.payload
        },
        setHeroImage: (state, actions) =>{
            state.heroImages = actions.payload
        }
    },
    extraReducers:{
        [getHeroMovieThunk.fulfilled]:()=>console.log('fulfilled'),
        [getHeroMovieThunk.pending]:()=>console.log('fulfilled'),
        [getHeroMovieThunk.rejected]:()=>console.log('fulfilled'),
    }
})

export const {setHeroImage, setMovie} = heroImageSlice.actions


export default heroImageSlice.reducer