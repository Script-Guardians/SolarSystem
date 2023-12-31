import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Uranus.css";

export const Uranus = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Uranus")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Uranus")
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
    <div className="uranus-page">
      <img
        src="https://images.unsplash.com/photo-1639548206689-1a5238f8d5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        className="uranus-image"
        alt="uranus-logo"
      />
      <div className="uranus-info"></div>
      <h1 className="title">{planets[0].name}</h1>
      <p>
        Uranus, the seventh planet from the Sun, rotates at a nearly <br />
        90-degree angle from the plane of its orbit. This unique <br />
        tilt makes Uranus appear to spin on its side.
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
          <a href="https://solarsystem.nasa.gov/planets/uranus/overview/">
            READ MORE
          </a>
        </p>
    </div>

  );
};
