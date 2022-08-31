import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActorsThunk } from "../../slices/ActorsByMovieSlice";
import { useDispatch, useSelector } from 'react-redux';
import { PersonItem } from '../personItem/PersonItem';
import './styles.scss';


export const ActorsByMovie = ()=>{

    const { id } = useParams();
    const dispatch = useDispatch();
    const { actors, crew} = useSelector(state => state.actorsData.ActorsAndCrew);
    console.log('actors', actors)
    
    useEffect(() => {
    dispatch(getActorsThunk(id))
    }, [dispatch]);

    return(
        <section className="container">
            <div>
            <h2>Actors</h2>
            <div className=" actors_by_movie">
            {actors?.map(item=> item.profile_path && <PersonItem props={item} key={item?.id}/> )}
            </div>
            </div>
            <div>
            <h2>Crew</h2>
            <div className=" actors_by_movie">
            {crew?.map(item=> item.profile_path && <PersonItem props={item} key={item?.id}/> ) }
            </div>
            </div>
        </section>
    )
}