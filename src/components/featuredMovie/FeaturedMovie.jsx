import React, { useEffect } from 'react';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import './styles.scss';
import { Icons } from '../../asset/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { MovieItem } from '../movieItem/MovieItem';
import { getMoviesThunk } from '../../slices/MoviesSlice';

export const FeaturedMovie = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.moviesData);
  const settings = {
    dots: true,
    arrows: true,
    nextArrow: (
      <div onClick={'onClick'}>
        {' '}
        <Icons type="right" />
      </div>
    ),
    prevArrow: (
      <div onClick={'onClick'}>
        <Icons type="left" />
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, [dispatch]);

  return (
    <section className="container trends">
      <div className="featured-header">
        <h2 className="section_title">Trends Movies</h2>
        <p>See more {'>'} </p>
      </div>
      <Slider {...settings}>
        {movies?.results?.map(item => {
          return <MovieItem props={item} key={item.id} />;
        })}
      </Slider>
    </section>
  );
};
