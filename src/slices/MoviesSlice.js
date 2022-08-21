import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../api/api";

const initialState = {
   movies: [],
}

export const getMoviesThunk = createAsyncThunk(
    'movies/getMovies',
    async (_, {rejectWithValue, dispatch})=>{
        try {
            const movies = await getMovies()
            dispatch(setMovies(movies.data))
          
        } catch (error) {
            console.log(error)
        }
    }
)


export const MoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        setMovies: (state, actions)=>{
            state.movies = actions.payload
        },
       
    },
    extraReducers:{
        [getMoviesThunk.fulfilled]:()=>console.log('fulfilled'),
        [getMoviesThunk.pending]:()=>console.log('pending'),
        [getMoviesThunk.rejected]:()=>console.log('rejected'),
    }
})

export const {setMovies} = MoviesSlice.actions


export default MoviesSlice.reducer