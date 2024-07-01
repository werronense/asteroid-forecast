import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="site-header">
      <h2 className="site-header__heading">
        <Link to="/" className="site-header__link">
          Asteroid Forecast
        </Link>
      </h2>
    </header>
  );
};

export default Header;
