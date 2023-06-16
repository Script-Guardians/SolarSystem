import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Jupiter.css";

export const Jupiter = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/bodies/Jupiter")
      .then((response) => {
        setBodies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost/planets?name=Jupiter")
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
    <div className="jupiter-page">
      <img src="https://images.unsplash.com/photo-1639477734993-44982980229e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
        className="jupiter-image" alt="jupiter-logo" />
      <div className="jupiter-info"></div>
      <h1 className="title">{planets[0].name}</h1>
      <p>
      Fifth in line from the Sun, Jupiter is, by far, the largest <br />
      planet in the solar system more than twice as massive <br />
      as all the other planets combined.
      </p>
      <p className="property">Mass: {planets[0].mass}</p>
      <p className="property">
        Distance (Light Years): {planets[0].distance_light_year}
      </p>
      <p className="property">Temperature: {planets[0].temperature}</p>
      <p className="property">Gravity: {bodies.gravity}</p>
      <p className="property">Density: {bodies.density}</p>
      <p className="property">Discovery Date: {bodies.discoveryDate}</p>
      <p className="read-more">
        <a href="https://solarsystem.nasa.gov/planets/jupiter/overview/">
          READ MORE
        </a>
      </p>
    </div>
  );
};
