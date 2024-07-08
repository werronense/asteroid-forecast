import React from "react";

import "./ForecastDay.scss";
import { Asteroid } from "../pages/ForecastPage";

interface ForecastDayProps {
  heading: string;
  asteroids: Asteroid[];
}

const ForecastDay: React.FC<ForecastDayProps> = ({ heading, asteroids }) => {
  const hazardousAsteroids = asteroids.filter(
    (asteroid) => asteroid.is_potentially_hazardous_asteroid
  );

  return (
    <section className="forecast-day">
      <h3 className="forecast-day__heading">{heading}</h3>
      <div className="forecast-day__asteroid-counts">
        <p className="forecast-day__text">{asteroids.length} asteroids</p>
        {hazardousAsteroids.length > 0 && (
          <p className="forecast-day__text forecast-day__text--danger">
            {hazardousAsteroids.length} of them dangerous
          </p>
        )}
      </div>
    </section>
  );
};

export default ForecastDay;
