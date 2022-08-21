import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieData, getMovieImages, getTrailer } from "../api/api";


const initialState = {
    heroImages: {},
    movie: {},
    trailer: {},
}

export const getHeroMovieThunk = createAsyncThunk(
    'heroImage/getHeroImage',
    async (_, {rejectWithValue, dispatch}) =>{
        try {
            const images = await getMovieImages('507086')
            dispatch(setHeroImage(images.data.backdrops[2].file_path)) 
            const movie = await getMovieData('507086')
            dispatch(setMovie(movie.data))
            const trailer = await getTrailer('507086')
            dispatch(setTrailer(trailer.data.results[7].key))
        } catch (error) {
            console.log(error)
        }
        
    }
)

export const heroDataSlice = createSlice({
    name: 'heroImage',
    initialState,
    reducers:{
        setMovie: (state, actions)=>{
            state.movie = actions.payload
        },
        setHeroImage: (state, actions) =>{
            state.heroImages = actions.payload
        },
        setTrailer: (state, actions)=>{
            state.trailer = actions.payload
        }
    },
    extraReducers:{
        [getHeroMovieThunk.fulfilled]:()=>console.log('fulfilled'),
        [getHeroMovieThunk.pending]:()=>console.log('pending'),
        [getHeroMovieThunk.rejected]:()=>console.log('rejected'),
    }
})

export const {setHeroImage, setMovie, setTrailer} = heroDataSlice.actions


export default heroDataSlice.reducer