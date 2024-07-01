import { Link, useNavigate } from "react-router-dom";
import asteroidLogo from "../assets/images/asteroid-logo.png";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <img
        src={asteroidLogo}
        alt="asteroid forecast logo"
        className="site-header__logo"
        onClick={() => navigate("/")}
      />
      <h2 className="site-header__heading">
        <Link to="/" className="site-header__link">
          Asteroid Forecast
        </Link>
      </h2>
    </header>
  );
};

export default Header;
