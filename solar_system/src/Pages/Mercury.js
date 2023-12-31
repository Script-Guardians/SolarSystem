import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/mercury-image.png";
import "./Mercury.css";

export const Mercury = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Mercury")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Mercury")
      .then((response) => {
        setPlanets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!bodies || !planets) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  return (
    <div className="mercury-page">
      <img 
        src={logo} 
        className="mercury-image" 
        alt="mercury-logo" 
        />
      <div className="mercury-info">
        <h1 className="title">{planets[0].name}</h1>
          <p>
            Mercury is the smallest planet in our solar system and closest <br />
            to the Sun. It is only slightly larger than Earth's Moon. Mercury is <br />
            the fastest planet, zipping around the Sun every 88 Earth days.
          </p>
          <p className="property"><b>Orbital Period:</b> {planets[0].period} Earth Days</p>
          <p className="property"><b>Radius:</b> {bodies.equaRadius} km</p>
          <p className="property"><b>Mass:</b> {bodies.mass.massValue} * 10<sup>{bodies.mass.massExponent}</sup> kg</p>
          <p className="property">
          <b>Distances from Earth (Light Years):</b> {planets[0].distance_light_year} LY
          </p>
          <p className="property"><b>Temperature:</b> {planets[0].temperature} K</p>
          <p className="property"><b>Gravity:</b> {bodies.gravity} m/s<sup>2</sup></p>
          <p className="property"><b>Density:</b> {bodies.density} g/cm<sup>3</sup></p>
          <p className="read-more">
          <a href="https://solarsystem.nasa.gov/planets/mercury/overview/">
            READ MORE
          </a>
        </p>
      </div>
    </div>
  );
};
