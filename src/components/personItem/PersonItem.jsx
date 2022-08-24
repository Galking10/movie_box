import React from "react";
import './styles.scss';
import rating from '../../asset/rating.png';

export function PersonItem ({props}){
   
    return(
        <div className="person_item">
            <img className="photo" src= {`https://image.tmdb.org/t/p/original/${props?.profile_path}`} alt='poster'/>
            <div className="rating"> <img src={rating} alt="rating" />{props.vote_average?.toFixed(1)}</div>
            <h3>{props.title || props.original_name}</h3>
            <p className="country_date">{props.release_date}</p>
            <p className="country_date">{props.origin_country}</p>
        </div>
    )
}