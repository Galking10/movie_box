import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewMovies } from '../api/api';

const initialState = {
  movies: [],
};

export const getNewMoviesThunk = createAsyncThunk(
  'movies/getMovies',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const movies = await getNewMovies();
      dispatch(setNewMovies(movies.data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const NewMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNewMovies: (state, actions) => {
      state.movies = actions.payload;
    },
  },
  extraReducers: {
    [getNewMoviesThunk.fulfilled]: () => console.log('fulfilled'),
    [getNewMoviesThunk.pending]: () => console.log('pending'),
    [getNewMoviesThunk.rejected]: () => console.log('rejected'),
  },
});

export const { setNewMovies } = NewMoviesSlice.actions;

export default NewMoviesSlice.reducer;
