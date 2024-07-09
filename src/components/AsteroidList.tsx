import { Asteroid } from "../interfaces/asteroid";
import { AsteroidItem } from "./AsteroidItem";
import "./AsteroidList.scss";

interface AsteroidListProps {
  asteroids: Asteroid[];
}

export const AsteroidList: React.FC<AsteroidListProps> = ({ asteroids }) => {
  return (
    <ul>
      {asteroids?.map((asteroid) => {
        return <AsteroidItem key={asteroid.id} asteroid={asteroid} />;
      })}
    </ul>
  );
};
