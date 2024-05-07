import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../axiosConfig/instance'
import './style.css'
export default function Details() {
    
  const {id} = useParams()
   const [Movie,setMovie]  = useState({})

  const getMovie = ()=>{
    axiosInstance.get(`/${id}`).then((res)=>{
          setMovie(res.data);
       
    }).catch((err)=>{console.log(err.message)})
 
  } 
  useEffect(()=>{
    getMovie();

  },[])
  
   return (
    <>
       <div className="movie-details-container">
    <div className="movie-details">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.title} />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{Movie.title}</h2>
        <p className="movie-overview">{Movie.overview}</p>
        <p className="movie-info-item"><strong>Release Date:</strong> {Movie.release_date}</p>
        <p className="movie-info-item"><strong>Runtime:</strong> {Movie.runtime} minutes</p>
        <p className="movie-info-item"><strong>Genres:</strong> {Movie.genres && Movie.genres.map(genre => genre.name).join(', ')}</p>
        <p className="movie-info-item"><strong>Vote Average:</strong> {Movie.vote_average}</p>
      </div>
    </div>
  </div>


    </>
   ) 
}
