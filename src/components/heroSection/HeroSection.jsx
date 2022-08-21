import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../asset/Icons';
import { getHeroMovieThunk } from '../../slices/HeroSectionSlice';
import { Header } from '../header/Header';
import './styles.scss';
import rating from '../../asset/rating.png';

export const HeroSection = () => {
  const dispatch = useDispatch();


  const { heroImages, movie, trailer } = useSelector(state => state.heroData);

 
  useEffect(() => {
    dispatch(getHeroMovieThunk());
  }, [dispatch]);

  return (
    <>
      <section
        style={{
          background: 'center contain',  
          backgroundSize: '1440px',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            heroImages}")`,
        }}
      >
        <Header />
        <div className='container'>
          <div className='movie_info'>
          <h1 className='movie_title'>{movie?.title}</h1>
          <div className='rating'> 
          <img src={rating} alt="rating" />
          {movie?.vote_average?.toFixed(1)}</div>
          <p className='overview'>{movie?.overview}</p>
          <a href={`https://www.youtube.com/watch?v=${trailer}`}
          target='_blank'
          className='trailer_button'>
            <Icons type='play'/>
            WATCH TRAILER</a>
        </div></div>
        
      </section>
    </>
  );
};
