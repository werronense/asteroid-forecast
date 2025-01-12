import React from "react";
import "./ForecastHeading.scss";
import { getFormattedDateRange } from "../../utils/format-dates.ts";

export const ForecastHeading: React.FC = () => {
  const [startDate, endDate] = getFormattedDateRange(7);

  return (
    <>
      <h1 className="forecast-heading__header">Forecast</h1>
      <p className="forecast-heading__date-range">{`${startDate} - ${endDate}`}</p>
    </>
  );
};
