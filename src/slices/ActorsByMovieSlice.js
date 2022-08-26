import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActorByMovie } from "../api/api";


const initialState = {
    ActorsAndCrew: {},

}


export const getActorsThunk = createAsyncThunk(
    'actors/getActors', 
    async (id, {rejectWithValue, dispatch}) =>{
        try {
            const object = {}
            const crew = await getActorByMovie(id)
            object.crew = crew.data.crew
            const actors = await getActorByMovie(id)
            object.actors = actors.data.cast
            dispatch(setActorsAndCrew(object))
        } catch (error) {
            console.log(error)
        }
        
    }
)


export const ActorsByMovieSlice = createSlice({
    name: 'actors',
    initialState,
    reducers:{
        setActorsAndCrew: (state, actions)=>{
            state.ActorsAndCrew = actions.payload
        },
        
    },
    extraReducers:{
        // [getHeroMovieThunk.fulfilled]:()=>console.log('fulfilled'),
        // [getHeroMovieThunk.pending]:()=>console.log('pending'),
        // [getHeroMovieThunk.rejected]:()=>console.log('rejected'),
    }
})

export const {setActorsAndCrew} = ActorsByMovieSlice.actions


export default ActorsByMovieSlice.reducer