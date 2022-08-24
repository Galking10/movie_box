import React, { useEffect } from 'react';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import './styles.scss';
import { Icons } from '../../asset/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonsThunk } from '../../slices/PersonsSlice';
import { PersonItem } from '../personItem/PersonItem';


export const PopPersons = () => {
    const dispatch = useDispatch();
    const  {persons} = useSelector(state => state.personsData);
    const settings = {
        dots:true,
        arrows: true,
        nextArrow: <div onClick={'onClick'}> <Icons type="right"  /></div>,
        prevArrow: <div onClick={'onClick'}><Icons type="left" /></div> ,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    }

    useEffect(() => {
        dispatch(getPersonsThunk());
      }, [dispatch]);


  return (
       <section className="container trends">
      <div className='featured-header'>
        <h2>Popular actors</h2>
        <p>See more {'>'} </p>
      </div>
      <Slider {...settings}>
        {persons?.results?.map(item => {
                  return <PersonItem props={item} key={item.id} />;
                })}
       </Slider>
    </section>
  );
};
