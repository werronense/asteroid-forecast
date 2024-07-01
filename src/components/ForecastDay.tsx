import React from "react";

import "./ForecastDay.scss";

interface ForecastDayProps {
  milliseconds: number;
  heading: string;
}

const ForecastDay: React.FC<ForecastDayProps> = ({
  milliseconds,
  heading,
}) => {
  return (
    <section className="forecast-day" key={milliseconds}>
      <h3 className="forecast-day__heading">{heading}</h3>
      {/* todo: insert each AsteroidSummary */}
    </section>
  );
};

export default ForecastDay;
