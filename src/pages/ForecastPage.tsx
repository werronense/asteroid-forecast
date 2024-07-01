import "./ForecastPage.scss";
import { getStartDate, getEndDate } from "../utils/calculate-dates";

const ForecastPage = () => {
  return (
    <div className="forecast">
      <h1 className="forecast__heading">Asteroid Forecast</h1>
      <p className="forecast__date-range">
        {`${getStartDate().toLocaleDateString()} - ${getEndDate().toLocaleDateString()}`}
      </p>
    </div>
  );
};

export default ForecastPage;
