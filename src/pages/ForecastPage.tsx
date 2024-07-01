import "./ForecastPage.scss";
import { getDate, daysToMilliseconds } from "../utils/calculate-dates";

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
          <section className="forecast__day" key={daysToMilliseconds(value)}>
            <h3>{getDate(value).toDateString()}</h3>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ForecastPage;
