import React from "react";
import { Link, useNavigate } from "react-router-dom";
import asteroidLogo from "../../assets/images/asteroid-logo.png";

import "./Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="site-header__content-container">
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
      </div>
    </header>
  );
};

export default Header;
