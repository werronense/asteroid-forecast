import "./ForecastList.scss";
import { daysToMilliseconds, getDate } from "../utils/calculate-dates";
import { DailyForecast } from "../pages/ForecastPage";
import { ForecastItem } from "./ForecastItem";

interface ForecastListProps {
  forecast: DailyForecast[];
}

export const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  return (
    <div className="forecast-list">
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
