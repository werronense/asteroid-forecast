import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTriangleExclamation, FaMeteor } from "react-icons/fa6";
import axios from "axios";
import { getDate } from "../../utils/calculate-dates";
import { formatMillionsOfKms } from "../../utils/format-distances";
import { getLongLocalDate } from "../../utils/format-dates";
import { Asteroid, CloseApproachData } from "../../interfaces/asteroid";
import { Approaches } from "../../components/Approaches/Approaches.tsx";

import "./AsteroidPage.scss";

const { VITE_API_BASE_URL } = import.meta.env;

const AsteroidPage: React.FC = () => {
  const dateToday = getDate(0).toISOString().slice(0, 10);
  const dateInOneWeek = getDate(6).toISOString().slice(0, 10);

  const [asteroid, setAsteroid] = useState<Asteroid | undefined>();

  const closeApproach: CloseApproachData | undefined = asteroid?.close_approach_data.find(
    (approach) =>
      approach.close_approach_date >= dateToday &&
      approach.close_approach_date <= dateInOneWeek
  );

  const pastApproaches: CloseApproachData[] | undefined = asteroid?.close_approach_data.filter(
    (approach) => approach.close_approach_date < dateToday
  ).sort((a, b) =>
    a.close_approach_date < b.close_approach_date ? 1 : -1
  );

  const futureApproaches: CloseApproachData[] | undefined = asteroid?.close_approach_data.filter(
    (approach) => approach.close_approach_date > dateInOneWeek
  );

  interface AsteroidPageParams {
    id: string;
  }

  const { id } = useParams<keyof AsteroidPageParams>() as AsteroidPageParams;

  useEffect(() => {
    const fetchAsteroid = async (asteroidId: string) => {
      try {
        const response = await axios.get(
          `${VITE_API_BASE_URL}/asteroids/${asteroidId}`
        );

        setAsteroid(response.data);
      } catch (err) {
        console.error("GET request to /asteroids/:id endpoint failed: ", err);
      }
    };

    fetchAsteroid(id);
  }, []);

  return (
    asteroid && (
      <main className="asteroid-page">
        <div className="asteroid-page__container">
          <div className="asteroid-page__summary">
            <h1 className="asteroid-page__heading">
              {asteroid.designation || asteroid.name}
            </h1>
            <h2 className="asteroid-page__sub-heading">
              <FaMeteor /> Asteroid Details
            </h2>
            {asteroid.is_potentially_hazardous_asteroid && (
              <>
                <div className="asteroid-page__danger">
                  <p className="asteroid-page__text asteroid-page__text--danger">
                    <FaTriangleExclamation /> Potentially hazardous:
                  </p>
                  <p className="asteroid-page__text asteroid-page__text--danger">
                    This asteroid is large and close!
                  </p>
                </div>
              </>
            )}
            <p className="asteroid-page__text">
              <span className="bold">Name</span>: {asteroid.name}
            </p>
            {closeApproach && (
              <>
                <p className="asteroid-page__text">
                  <span className="bold">Near approach date</span>:<br />
                  {getLongLocalDate(
                    new Date(closeApproach.epoch_date_close_approach)
                  )}
                </p>
                <p className="asteroid-page__text">
                  <span className="bold">Near approach distance</span>: <br />
                  {formatMillionsOfKms(closeApproach.miss_distance.kilometers)}
                </p>
              </>
            )}
            <p className="asteroid-page__text">
              <span className="bold">Maximum diameter</span>:
              <br />
              {Math.round(
                asteroid.estimated_diameter.meters.estimated_diameter_max
              )}{" "}
              meters
            </p>
            {asteroid.orbital_data && (
              <>
                <p className="asteroid-page__text">
                  <span className="bold">Year discovered</span>:{" "}
                  {asteroid.orbital_data.first_observation_date.slice(0, 4)}
                </p>
              </>
            )}
          </div>
          {pastApproaches && (
            <Approaches
              heading="Past Near Approaches"
              approachData={pastApproaches}
            />
          )}
          {futureApproaches && (
            <Approaches
              heading="Future Near Approaches"
              approachData={futureApproaches}
            />
          )}
        </div>
      </main>
    )
  );
};

export default AsteroidPage;
