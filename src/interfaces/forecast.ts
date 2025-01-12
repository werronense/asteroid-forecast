import { Asteroid } from "./asteroid.ts";

export interface DailyForecast {
  date: string;
  asteroids: Asteroid[];
}
