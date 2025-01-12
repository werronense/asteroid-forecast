import React from "react";
import "./ForecastPage.scss";
import { getDate } from "../../utils/calculate-dates";
import { Asteroid } from "../../interfaces/asteroid";
import { ForecastList } from "../../components/ForecastList/ForecastList.tsx";

// contract interface exported for use in App.tsx
export interface DailyForecast {
  date: string;
  asteroids: Asteroid[];
}

// interface to define component props
export interface ForecastProps {
  forecast: DailyForecast[];
}

const ForecastPage: React.FC<ForecastProps> = ({ forecast }) => {
  // create an array of all asteroids
  const allAsteroids = forecast.reduce(
    (a, b) => a.concat(b.asteroids),
    [] as Asteroid[],
  );

  // create an array of all hazardouds asteroids
  const hazardousAsteroids = allAsteroids.filter(
    (asteroid) => asteroid.is_potentially_hazardous_asteroid === true,
  );

  return (
    <main className="forecast" data-testid="forecast">
      <div className="forecast__container">
        <div className="forecast__summary" data-testid="forecast-summary">
          <h1 className="forecast__heading">Forecast</h1>
          <p className="forecast__date-range">
            {`${getDate(0).toLocaleDateString()} - ${getDate(
              6,
            ).toLocaleDateString()}`}
          </p>
          <h2 className="forecast__sub-heading">Summary</h2>
          <p className="forecast__text">
            This week {allAsteroids.length} asteroids will approach earth,{" "}
            <span className="forecast__text--danger">
              including {hazardousAsteroids.length} potentially dangerous ones
            </span>
            .
          </p>
        </div>
        <ForecastList forecast={forecast} />
      </div>
    </main>
  );
};

export default ForecastPage;
