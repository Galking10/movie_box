import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularPersons } from '../api/api';

const initialState = {
  persons: [],
};

export const getPersonsThunk = createAsyncThunk(
  'persons/getPersons',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const persons = await getPopularPersons();
      dispatch(setPersons(persons.data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const PersonsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPersons: (state, actions) => {
      state.persons = actions.payload;
    },
  },
  extraReducers: {
    [getPersonsThunk.fulfilled]: () => console.log('fulfilled'),
    [getPersonsThunk.pending]: () => console.log('pending'),
    [getPersonsThunk.rejected]: () => console.log('rejected'),
  },
});

export const { setPersons } = PersonsSlice.actions;

export default PersonsSlice.reducer;
