import React from "react";
import "./ForecastPage.scss";
import { getAsteroidCounts } from "../../utils/asteroids.ts";
import { DailyForecast } from "../../interfaces/forecast.ts";
import { ForecastHeading } from "../../components/ForecastHeading/ForecastHeading.tsx";
import { ForecastSummary } from "../../components/ForecastSummary/ForecastSummary.tsx";
import { ForecastList } from "../../components/ForecastList/ForecastList.tsx";

interface ForecastProps {
  forecast: DailyForecast[];
}

const ForecastPage: React.FC<ForecastProps> = ({ forecast }) => {
  const [asteroidCount, hazardousAsteroidCount] = getAsteroidCounts(forecast);

  return (
    <main className="forecast" data-testid="forecast">
      <div className="forecast__container">
        <div className="forecast__card">
          <ForecastHeading />
          <ForecastSummary
            asteroidCount={asteroidCount}
            hazardousAsteroidCount={hazardousAsteroidCount}
          />
        </div>
        <ForecastList forecast={forecast} />
      </div>
    </main>
  );
};

export default ForecastPage;
