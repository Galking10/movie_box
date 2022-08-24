import axios from 'axios'

const key = '97304cd27e2e2b399c6b2133a76010d0'



export const getMovieImages = (movie_id)=> axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${key}&language=en`)


export const getMovieData = (movie_id)=> axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en`)

export const getTrailer = (movie_id)=> axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`)

export const getMovies = ()=> axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`) 

export const getNewMovies = ()=> axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)

export const getPopularPersons = ()=> axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1`)


