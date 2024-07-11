import { Asteroid } from "../interfaces/asteroid";
import { Link } from "react-router-dom";
import { FaMeteor, FaChevronRight } from "react-icons/fa6";
import "./AsteroidItem.scss";

interface AsteroidProps {
  asteroid: Asteroid;
}

export const AsteroidItem: React.FC<AsteroidProps> = ({ asteroid }) => {
  const isDangerous = asteroid.is_potentially_hazardous_asteroid;

  return (
    <li
      className={"asteroid-item"}
    >
      <Link to={`/asteroids/${asteroid.id}`} className={`asteroid-item__link ${isDangerous ? "asteroid-item__link--danger" : ""}`}>
        <span className="asteroid-item__group"><FaMeteor /> {asteroid.name}</span> <FaChevronRight />
      </Link>
    </li>
  );
};
