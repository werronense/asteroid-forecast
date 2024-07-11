import { Asteroid } from "../interfaces/asteroid";
import { FaMeteor } from "react-icons/fa6";
import "./AsteroidItem.scss";

interface AsteroidProps {
  asteroid: Asteroid;
}

export const AsteroidItem: React.FC<AsteroidProps> = ({ asteroid }) => {
  const isDangerous = asteroid.is_potentially_hazardous_asteroid;

  return (
    <li
      className={`asteroid-item ${isDangerous ? "asteroid-item--danger" : ""}`}
    >
      <FaMeteor /> {asteroid.name}
    </li>
  );
};
