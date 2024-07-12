import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
          </div>
        </div>
      </main>
    )
  );
};

export default AsteroidPage;
