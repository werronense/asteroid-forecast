import "./ForecastItem.scss";
import { Asteroid } from "../pages/ForecastPage";

interface ForecastItemProps {
  heading: string;
  asteroids: Asteroid[];
}

export const ForecastItem: React.FC<ForecastItemProps> = ({
  heading,
  asteroids,
}) => {
  const hazardousAsteroids = asteroids.filter(
    (asteroid) => asteroid.is_potentially_hazardous_asteroid
  );

  return (
    <article className="forecast-item">
      <h3 className="forecast-item__heading">{heading}</h3>
      <div className="forecast-item__asteroid-counts">
        <p className="forecast-item__text">{asteroids.length} asteroids</p>
        {hazardousAsteroids.length > 0 && (
          <p className="forecast-item__text forecast-item__text--danger">
            {hazardousAsteroids.length} of them dangerous
          </p>
        )}
      </div>
    </article>
  );
};
