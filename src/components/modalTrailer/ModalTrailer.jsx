import React from 'react';
import { Icons } from '../../asset/Icons';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenModal } from '../../slices/ModalSlice';

export const ModalTrailer = ({ trailer }) => {
  const { openModal } = useSelector(state => state.modalData);
  const dispatch = useDispatch();
  const closingModal = e => {
    if (e.target.id !== 'closing') {
      dispatch(setOpenModal());
    }
  };

  return (
    <>
      {openModal && (
        <div
          onClick={closingModal}
          tabIndex="0"
          className="backdrope"
        >
          <div className="trailer_window">
            <iframe
              width="1240"
              height="697.5"
              src={`https://www.youtube.com/embed/${trailer}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button
              onClick={() => dispatch(setOpenModal())}
              className="close_btn"
            >
              <Icons type={'close'} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
