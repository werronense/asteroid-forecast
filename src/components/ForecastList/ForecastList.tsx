import "./ForecastList.scss";
import { daysToMilliseconds, getDate } from "../../utils/calculate-dates.ts";
import { DailyForecast } from "../../interfaces/forecast.ts";
import { ForecastItem } from "../ForecastItem/ForecastItem.tsx";

interface ForecastListProps {
  forecast: DailyForecast[];
}

export const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <div className="forecast-list" data-testid="forecast-list">
      {forecast?.map((day, i) => (
        <ForecastItem
          key={daysToMilliseconds(i)}
          heading={getDate(i).toDateString()}
          asteroids={day.asteroids}
        />
      ))}
    </div>
  );
};
