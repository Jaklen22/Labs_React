import React from 'react'
import './style.css'

export default function NotFound() {
  return (
    <div>
    <h2 className="hl2">Oops, 404 Error!</h2>
    <div className="theBody">
      <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWroXVAHulp9wVLTCv_EpOp923P_Z8x88vSHBd1eljU_xpcq3gbPdv_iL-bw&s" alt="img can not found" />
      <p className="text">We’re sorry, but it seems that the page you are looking for does not exist.</p>
    </div>
  </div>
  )
}

