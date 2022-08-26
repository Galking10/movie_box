import React from "react";
import './styles.scss';
import rating from '../../asset/rating.png';
import { useNavigate} from "react-router-dom";


export function MovieItem ({props}){
    const navigate = useNavigate()
    

    const redirectToMovieDetail = ()=>{
        navigate(`../movie/${props.id}`, { replace: true });
    }
   
    return(
        
        <div 
        onClick={redirectToMovieDetail}
        className="movie_item">
            <img className="poster" src= {`https://image.tmdb.org/t/p/original/${props?.poster_path}`} alt='poster'/>
            <div className="rating"> <img src={rating} alt="rating" />{props.vote_average?.toFixed(1)}</div>
            <h3 className="movie_item_title">{props.title || props.original_name}</h3>
            <p className="country_date">{props.release_date}</p>
            <p className="country_date">{props.origin_country}</p>
        </div>
    
    )
}