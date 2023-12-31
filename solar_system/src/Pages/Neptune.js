import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Neptune.css";

export const Neptune = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Neptune")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Neptune")
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
    <div className="neptune-page">
      <img
        src="https://images.unsplash.com/photo-1639477878754-4119b60fb02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        className="neptune-image"
        alt="neptune-logo"
      />
      <div className="neptune-info"></div>
        <h1 className="title">{planets[0].name}</h1>
        <p>
          Neptune, the eighth and most distant major planet orbiting <br/>
          our Sun is dark, cold and whipped by supersonic winds. It was <br/>
          the first planet located through mathematical calculations, <br/> 
          rather than by telescope.
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
          <a href="https://solarsystem.nasa.gov/planets/neptune/overview/">
            READ MORE
          </a>
      </p>
    </div>
  );
};