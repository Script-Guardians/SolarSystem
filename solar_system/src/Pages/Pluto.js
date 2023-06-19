import React from 'react'
import './Pluto.css'
import logo from "../images/pluto1.png";

export const Pluto = () => {
  return (
    <div className="pluto-page">
    <img
      src={logo}
      className="pluto-image"
      alt="pluto-logo"
    />
    <div className="pluto-info">
      <h1>404</h1> <h2>Planet Not Found!</h2>
      <p className="read-more">
        <a href="https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/">
          READ MORE
        </a>
      </p>
    </div>
  </div>
  )
}
