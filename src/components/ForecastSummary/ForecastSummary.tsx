import React from "react";
import "./ForecastSummary.scss";

interface ForecastSummaryProps {
  asteroidCount: number;
  hazardousAsteroidCount: number;
}

export const ForecastSummary: React.FC<ForecastSummaryProps> = ({
  asteroidCount,
  hazardousAsteroidCount,
}) => {
  return (
    <section className="forecast-summary" data-testid="forecast-summary">
      <h2 className="forecast-summary__heading">Summary</h2>
      <p className="forecast-summary__text">
        This week {asteroidCount} asteroids will approach earth,{" "}
        <span className="forecast-summary__text--danger">
          including {hazardousAsteroidCount} potentially dangerous ones
        </span>
        .
      </p>
    </section>
  );
};
