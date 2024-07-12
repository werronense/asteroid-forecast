import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
import axios from "axios";
import { Asteroid } from "../interfaces/asteroid";

import "./AsteroidPage.scss";

const { VITE_API_BASE_URL } = import.meta.env;

const AsteroidPage: React.FC = () => {
  const [asteroid, setAsteroid] = useState<Asteroid | undefined>();

  interface AsteroidPageParams {
    id: string;
  }

  const { id } = useParams<keyof AsteroidPageParams>() as AsteroidPageParams;

  useEffect(() => {
    const fetchAsteroid = async (asteroidId: string) => {
      try {
        const response = await axios.get(
          `${VITE_API_BASE_URL}/asteroids/${asteroidId}`
        );

        setAsteroid(response.data);
      } catch (err) {
        console.error("GET request to /asteroids/:id endpoint failed: ", err);
      }
    };

    fetchAsteroid(id);
  }, []);

  return (
    asteroid && (
      <main className="asteroid-page">
        <div className="asteroid-page__container">
          <div className="asteroid-page__summary">
            <h1 className="asteroid-page__heading">
              {asteroid.designation || asteroid.name}
            </h1>
            <h2 className="asteroid-page__sub-heading">Asteroid Details</h2>
            {asteroid.is_potentially_hazardous_asteroid && (
              <p className="asteroid-page__text asteroid-page__text--danger">
                <FaTriangleExclamation /> Potentially hazardous
              </p>
            )}
            <p className="asteroid-page__text">
              <span className="bold">Name</span>: {asteroid.name}
            </p>
            <p className="asteroid-page__text">
              <span className="bold">Maximum diameter</span>:
              <br />
              {Math.round(
                asteroid.estimated_diameter.meters.estimated_diameter_max
              )}{" "}
              meters
            </p>
            {asteroid.orbital_data && (
              <>
                <p className="asteroid-page__text">
                  <span className="bold">Discovered</span>:{" "}
                  {asteroid.orbital_data.first_observation_date}
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    )
  );
};

export default AsteroidPage;
