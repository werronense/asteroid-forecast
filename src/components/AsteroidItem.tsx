import { Asteroid } from "../interfaces/asteroid";
import "./AsteroidItem.scss";

interface AsteroidProps {
  asteroid: Asteroid;
}

export const AsteroidItem: React.FC<AsteroidProps> = ({ asteroid }) => {
  // todo: implement asteroid item/return an li
  return <li>{asteroid.name}</li>;
};
