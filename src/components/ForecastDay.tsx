import React from "react";

import "./ForecastDay.scss";

interface ForecastDayProps {
  heading: string;
}

const ForecastDay: React.FC<ForecastDayProps> = ({ heading }) => {
  return (
    <section className="forecast-day">
      <h3 className="forecast-day__heading">{heading}</h3>
      {/* todo: insert each AsteroidSummary */}
    </section>
  );
};

export default ForecastDay;
