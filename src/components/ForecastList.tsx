import "./ForecastList.scss";
import { daysToMilliseconds, getDate } from "../utils/calculate-dates";
import { ForecastProps } from "../pages/ForecastPage";
import { ForecastItem } from "./ForecastItem";

export const ForecastList: React.FC<ForecastProps> = ({ forecast }) => {
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
