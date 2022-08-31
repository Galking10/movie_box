import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroMovieThunk } from '../../slices/HeroSectionSlice';
import { Header } from '../header/Header';
import './styles.scss';
import rating from '../../asset/rating.png';
import { WatchTrailerBtn } from '../watchTrailerBtn/WatchTrailerBtn';

export const HeroSection = () => {
  const dispatch = useDispatch();
  const { heroImages, movie } = useSelector(state => state.heroData.heroObject);

  useEffect(() => {
    dispatch(getHeroMovieThunk('507086'));
  }, [dispatch]);

  return (
    <>
      <section
        style={{
          background: 'center contain',
          backgroundSize: '1440px',
          backgroundPosition: '50% 50%',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${heroImages}")`,
        }}
      >
        <Header />
        <div className="container">
          <div className="hero_info">
            <h1 className="hero_title">{movie?.title}</h1>
            <div className="rating_hero">
              <img src={rating} alt="rating" />
              {movie?.vote_average?.toFixed(1)}
            </div>
            <p className="overview">{movie?.overview}</p>
            <WatchTrailerBtn />
          </div>
        </div>
      </section>
    </>
  );
};
