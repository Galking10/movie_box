import axios from 'axios'

const key = '97304cd27e2e2b399c6b2133a76010d0'
const api = 'https://api.themoviedb.org/3'



export const getMovieImages = (movie_id)=> axios.get(`${api}/movie/${movie_id}/images?api_key=${key}&language=en`)


export const getMovieData = (movie_id)=> axios.get(`${api}/movie/${movie_id}?api_key=${key}&language=en`)

export const getTrailer = (movie_id)=> axios.get(`${api}/movie/${movie_id}/videos?api_key=${key}&language=en-US`)

export const getMovies = ()=> axios.get(`${api}/trending/movie/week?api_key=${key}`) 

export const getNewMovies = ()=> axios.get(`${api}/movie/now_playing?api_key=${key}&language=en-US&page=1`)

export const getPopularPersons = ()=> axios.get(`${api}/person/popular?api_key=${key}&language=en-US&page=1`)

export const getActorByMovie = (movie_id, type = 'movie')=> axios.get(`${api}/${type}/${movie_id}/credits?api_key=${key}&language=en`)


