import React from "react";
import "./ForecastPage.scss";
import { getDate, daysToMilliseconds } from "../utils/calculate-dates";
import ForecastDay from "../components/ForecastDay";

interface MissDistance {
  astronomical: string;
  kilometers: string;
  lunar: string;
  miles: string;
}

interface RelativeVelocity {
  kilometers_per_hour: string;
  kilometers_per_second: string;
  miles_per_hour: string;
}

interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  miss_distance: MissDistance;
  orbiting_body: string;
  relative_velocity: RelativeVelocity;
}

interface MinMax {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface EstimatedDiameter {
  feet: MinMax;
  kilometers: MinMax;
  meters: MinMax;
  miles: MinMax;
}

// export for use in ForecastDay.tsx
export interface Asteroid {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  estimated_diameter: EstimatedDiameter;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: { self: string };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}

// contract interface exported for use in App.tsx
export interface DailyForecast {
  date: string;
  asteroids: Asteroid[];
}

// interface to define component props
interface ForecastProps {
  forecast: DailyForecast[];
}

const ForecastPage: React.FC<ForecastProps> = ({ forecast }) => {
  // create an array of all asteroids
  const allAsteroids = forecast.reduce(
    (a, b) => a.concat(b.asteroids),
    [] as Asteroid[]
  );

  // create an array of all hazardouds asteroids
  const hazardousAsteroids = allAsteroids.filter(
    (asteroid) => asteroid.is_potentially_hazardous_asteroid === true
  );

  return (
    <main className="forecast">
      <div className="forecast__container">
        <div className="forecast__summary">
          <h1 className="forecast__heading">Forecast</h1>
          <p className="forecast__date-range">
            {`${getDate(0).toLocaleDateString()} - ${getDate(
              6
            ).toLocaleDateString()}`}
          </p>
          <h2 className="forecast__sub-heading">Summary</h2>
          <p className="forecast__text">
            This week {allAsteroids.length} asteroids will pass the earth,{" "}
            <span className="forecast__text--danger">
              including {hazardousAsteroids.length} potentially dangerous ones
            </span>
            .
          </p>
        </div>
        <div className="forecast__week">
          {forecast?.map((day, i) => (
            <ForecastDay
              key={daysToMilliseconds(i)}
              heading={getDate(i).toDateString()}
              asteroids={day.asteroids}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ForecastPage;
