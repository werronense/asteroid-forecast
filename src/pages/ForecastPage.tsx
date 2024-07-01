import "./ForecastPage.scss";
import { getDate } from "../utils/calculate-dates";

const ForecastPage = () => {
  return (
    <div className="forecast">
      <h1 className="forecast__heading">Asteroid Forecast</h1>
      <p className="forecast__date-range">
        {`${getDate(0).toLocaleDateString()} - ${getDate(6).toLocaleDateString()}`}
      </p>
    </div>
  );
};

export default ForecastPage;
