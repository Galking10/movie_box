import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const isLoadingSlice = createSlice({
  name: 'opeModal',
  initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
