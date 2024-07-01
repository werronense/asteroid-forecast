import "./ForecastPage.scss";
import { getDate, daysToMilliseconds } from "../utils/calculate-dates";
import ForecastDay from "../components/ForecastDay";

const ForecastPage = () => {
  return (
    <div className="forecast">
      <h1 className="forecast__heading">Asteroid Forecast</h1>
      <p className="forecast__date-range">
        {`${getDate(0).toLocaleDateString()} - ${getDate(
          6
        ).toLocaleDateString()}`}
      </p>
      <div className="forecast__week">
        {[...Array(7).keys()].map((value) => (
          <ForecastDay
            milliseconds={daysToMilliseconds(value)}
            heading={getDate(value).toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastPage;
