import axios from 'axios'

const key = '2a235b91059bbee0cb0dad81130d7beb'
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/766507?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en
// https://api.themoviedb.org/3/movie/92783?api_key=2a235b91059bbee0cb0dad81130d7beb&language=en-US


// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US


export const getMovieImages = (movie_id)=> axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${key}&language=en`)


export const getMovieData = (movie_id)=> axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en`)

