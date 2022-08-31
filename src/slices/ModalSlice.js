import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
};

export const ModalSlice = createSlice({
  name: 'opeModal',
  initialState,
  reducers: {
    setOpenModal: (state, actions) => {
      state.openModal = !state.openModal;
    },
  },
});

export const { setOpenModal } = ModalSlice.actions;
export default ModalSlice.reducer;
