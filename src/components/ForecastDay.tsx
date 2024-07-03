import React from "react";

import "./ForecastDay.scss";
import { Asteroid } from "../pages/ForecastPage";

interface ForecastDayProps {
  heading: string;
  asteroids: Asteroid[];
}

const ForecastDay: React.FC<ForecastDayProps> = ({ heading, asteroids }) => {
  return (
    <section className="forecast-day">
      <h3 className="forecast-day__heading">{heading}</h3>
      <div className="forecast-day__asteroid-counts">
        <p>{`${
          asteroids.filter(
            (asteroid) =>
              asteroid.close_approach_data[0].orbiting_body === "Earth"
          ).length
        } asteroids near earth today`}</p>
        <p>{`${
          asteroids.filter(
            (asteroid) =>
              asteroid.is_potentially_hazardous_asteroid &&
              asteroid.close_approach_data[0].orbiting_body === "Earth"
          ).length
        } of them potentially hazardous`}</p>
      </div>
    </section>
  );
};

export default ForecastDay;
