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
    <div className="container">
      <h1 className="title">{planets[0].name}</h1>
      <p>
        Mars is a dusty, cold, desert world with a very thin atmosphere. There
        is strong evidence Mars was—billions of years ago—wetter and warmer,
        with a thicker atmosphere.
      </p>
      
      <p className="property">Mass: {planets[0].mass}</p>
      <p className="property">
        Distance (Light Years): {planets[0].distance_light_year}
      </p>
      <p className="property">Temperature: {planets[0].temperature}</p>
      <p className="property">Gravity: {bodies.gravity}</p>
      <p className="property">Density: {bodies.density}</p>
      <p className="property">Discovery Date: {bodies.discoveryDate}</p>
      <p className="read-more" ><a href="https://solarsystem.nasa.gov/planets/mars/overview/">READ MORE</a></p>

    </div>
    //comment
  );
};
