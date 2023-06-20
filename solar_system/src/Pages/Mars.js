import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mars.css";

export const Mars = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/mars")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Mars")
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
    <div className="mars-page">
      <img
        src="https://images.unsplash.com/photo-1639477735279-c36dda1f7ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3880&q=80"
        className="mars-image"
        alt="mars-logo"
      />
      <div className="mars-info">
        <h1 className="title">{planets[0].name}</h1>
        <p>
          Mars is a dusty, cold, desert world with a very thin atmosphere.{" "}
          <br />
          There is strong evidence Mars was, billions of years ago, <br />
          wetter and warmer, with a thicker atmosphere.
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
          <a href="https://solarsystem.nasa.gov/planets/mars/overview/">
            READ MORE
          </a>
        </p>
      </div>
    </div>
  );
};
