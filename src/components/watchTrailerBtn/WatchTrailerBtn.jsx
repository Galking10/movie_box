import React from 'react';
import { Icons } from '../../asset/Icons';
import { setOpenModal } from '../../slices/ModalSlice';
import { useDispatch } from 'react-redux';

export const WatchTrailerBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setOpenModal())}
      target="_blank"
      className="trailer_button"
    >
      <Icons type="play" />
      <span>WATCH TRAILER</span>
    </button>
  );
};
