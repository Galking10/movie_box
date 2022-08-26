import React from "react";
import './styles.scss';
import person from '../../asset/person.jpg'

export function PersonItem ({props}){
    const personPhoto= `https://image.tmdb.org/t/p/original/${props?.profile_path}` || person
   
    return(
        <div className="person_item">
            <img className="person_photo" src= {personPhoto} alt='poster'/>
            <h3 className="person_title">{props.name}</h3>
            <p className="person_job">{props.job}</p>
        </div>
    )
}