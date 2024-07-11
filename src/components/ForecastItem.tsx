import { DisplayBtn } from "./DisplayBtn";
import { Asteroid } from "../interfaces/asteroid";
import { AsteroidList } from "./AsteroidList";
import "./ForecastItem.scss";

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
      <div className="forecast-item__container">
        <section className="forecast-item__asteroid-counts">
          <div className="forecast-item__group">
            <p className="forecast-item__text">{asteroids.length} asteroids</p>
            {hazardousAsteroids.length > 0 && (
              <p className="forecast-item__text forecast-item__text--danger">
                {hazardousAsteroids.length} of them dangerous
              </p>
            )}
          </div>
          <div className="forecast-item__btn-container">
            <DisplayBtn />
          </div>
        </section>
        <section className="forecast-item__list forecast-item__list--closed">
          <AsteroidList asteroids={asteroids} />
        </section>
      </div>
    </article>
  );
};
