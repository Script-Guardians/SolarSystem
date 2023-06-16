import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Mercury.css";


export const Mercury = () => {
  const [bodies, setBodies] = useState(null);
  const [planets, setPlanets] = useState(null);
  const { id } = useParams();

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
  }, [id]);

  if (!bodies || !planets) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  return (
    <div className="mecury-page">
      <h1 className="title">{planets[0].name}</h1>
      <p>
        Mercury—the smallest planet in our solar system and closest to the
        Sun—is only slightly larger than Earth's Moon. Mercury is the fastest
        planet,<br></br> zipping around the Sun every 88 Earth days.
      </p>

      <p className="property">Mass: {planets[0].mass}</p>
      <p className="property">
        Distance (Light Years): {planets[0].distance_light_year}
      </p>
      <p className="property">Temperature: {planets[0].temperature}</p>
      <p className="property">Gravity: {bodies.gravity}</p>
      <p className="property">Density: {bodies.density}</p>
      <p className="property">Discovery Date: {bodies.discoveryDate}</p>
      <p className="read-more" ><a href="https://solarsystem.nasa.gov/planets/mercury/overview/">READ MORE</a></p>

    </div>
    //comment
  );
};
