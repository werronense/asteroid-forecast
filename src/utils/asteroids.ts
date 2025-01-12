import { DailyForecast } from "../interfaces/forecast.ts";
import { Asteroid } from "../interfaces/asteroid.ts";

const concatForecast = (
  acc: Asteroid[],
  forecast: DailyForecast,
): Asteroid[] => {
  return acc.concat(forecast.asteroids);
};

const getAllAsteroids = (forecast: DailyForecast[]) => {
  return forecast.reduce(concatForecast, []);
};

const isAsteroidHazardous = (asteroid: Asteroid): boolean => {
  return asteroid.is_potentially_hazardous_asteroid;
};

const getHazardousAsteroids = (asteroids: Asteroid[]) => {
  return asteroids.filter(isAsteroidHazardous);
};

export const getAsteroidCounts = (
  forecast: DailyForecast[],
): [number, number] => {
  const allAsteroids = getAllAsteroids(forecast);
  const hazardousAsteroids = getHazardousAsteroids(allAsteroids);

  return [allAsteroids.length, hazardousAsteroids.length];
};
