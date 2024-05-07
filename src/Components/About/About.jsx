import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate=useNavigate()

   const handleNav =()=>{

    navigate("/movies")
    }

   
  return (
    <div>
      about
      <button className='btn btn-primary' onClick={()=>{handleNav()}}>goTo movies</button>
    </div>
  )
}
