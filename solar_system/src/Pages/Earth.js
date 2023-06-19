import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Earth.css";

export const Earth = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Earth")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Earth")
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
    <div className="earth-page">
      <img
        src="https://images.unsplash.com/photo-1639653279211-09958a51fb00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        className="earth-image"
        alt="earth-logo"
      />
      <div className="earth-info">
        <h1 className="title">{planets[0].name}</h1>
        <p>
          Earth—our home planet—is the only place we know of so far <br />
          that's inhabited by living things. It's also the only planet in our{" "}
          <br />
          solar system with liquid water on the surface.
        </p>
        <p className="property"><b>Mass:</b> {planets[0].mass}</p>
        <p className="property">
        <b>Distance (Light Years):</b> {planets[0].distance_light_year}
        </p>
        <p className="property"><b>Orbital Period:</b> {planets[0].period}</p>
        <p className="property"><b>Temperature:</b> {planets[0].temperature}</p>
        <p className="property"><b>Gravity:</b> {bodies.gravity}</p>
        <p className="property"><b>Density:</b> {bodies.density}</p>
        <p className="property"><b>Discovery Date:</b> {bodies.discoveryDate}</p>
        <p className="read-more">
          <a href="https://solarsystem.nasa.gov/planets/earth/overview/">
            READ MORE
          </a>
        </p>
      </div>
    </div>
  );
};
