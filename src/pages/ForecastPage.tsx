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

interface Asteroid {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData;
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
  date: Date;
  asteroids: Asteroid[];
}

// interface to define component props
interface ForecastProps {
  forecast: DailyForecast[];
}

const ForecastPage: React.FC<ForecastProps> = ({ forecast }) => {
  console.log(forecast);
  return (
    <div className="forecast">
      <h1 className="forecast__heading">Asteroid Forecast</h1>
      <p className="forecast__date-range">
        {`${getDate(0).toLocaleDateString()} - ${getDate(
          6
        ).toLocaleDateString()}`}
      </p>
      <div className="forecast__week">
        {[...Array(7).keys()].map((value) => (
          <ForecastDay
            key={daysToMilliseconds(value)}
            heading={getDate(value).toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastPage;
