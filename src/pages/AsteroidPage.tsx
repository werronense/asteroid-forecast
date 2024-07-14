import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
import axios from "axios";
import { getDate } from "../utils/calculate-dates";
import { formatMillionsOfKms } from "../utils/format-distances";
import { getLongLocalDate, getShortLocalDate } from "../utils/format-dates";
import { Asteroid, CloseApproachData } from "../interfaces/asteroid";
import { Approaches } from "../components/Approaches";

import "./AsteroidPage.scss";

const { VITE_API_BASE_URL } = import.meta.env;

const AsteroidPage: React.FC = () => {
  const dateToday = getDate(0).toISOString().slice(0, 10);
  const dateInOneWeek = getDate(6).toISOString().slice(0, 10);

  const [asteroid, setAsteroid] = useState<Asteroid | undefined>();
  const [closeApproach, setCloseApproach] = useState<
    CloseApproachData | undefined
  >();
  const [pastApproaches, setPastApproaches] = useState<
    CloseApproachData[] | undefined
  >();
  const [futureApproaches, setFutureApproaches] = useState<
    CloseApproachData[] | undefined
  >();

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

  useEffect(() => {
    const getCloseApproach = () => {
      const data = asteroid?.close_approach_data.find(
        (approach) =>
          approach.close_approach_date >= dateToday &&
          approach.close_approach_date <= dateInOneWeek
      );
      setCloseApproach(data);
    };

    const getPastApproaches = (limit: string) => {
      const data = asteroid?.close_approach_data.filter(
        (approach) => approach.close_approach_date < limit
      );
      setPastApproaches(data);
    };

    const getFutureApproaches = (limit: string) => {
      const data = asteroid?.close_approach_data.filter(
        (approach) => approach.close_approach_date > limit
      );
      setFutureApproaches(data);
    };

    if (asteroid) {
      getCloseApproach();
      getPastApproaches(dateToday);
      getFutureApproaches(dateInOneWeek);
    }
  }, [asteroid]);

  return (
    asteroid && (
      <main className="asteroid-page">
        <div className="asteroid-page__container">
          <div className="asteroid-page__summary">
            <h1 className="asteroid-page__heading">
              {asteroid.designation || asteroid.name}
            </h1>
            <h2 className="asteroid-page__sub-heading">Asteroid Details</h2>
            {asteroid.is_potentially_hazardous_asteroid && (
              <p className="asteroid-page__text asteroid-page__text--danger">
                <FaTriangleExclamation /> Potentially hazardous
              </p>
            )}
            <p className="asteroid-page__text">
              <span className="bold">Name</span>: {asteroid.name}
            </p>
            {closeApproach && (
              <>
                <p className="asteroid-page__text">
                  <span className="bold">Approach date</span>:<br />
                  {getLongLocalDate(
                    new Date(closeApproach.close_approach_date)
                  )}
                </p>
                <p className="asteroid-page__text">
                  <span className="bold">Approach distance</span>: <br />
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
                  <span className="bold">Discovered</span>:{" "}
                  {getShortLocalDate(
                    new Date(asteroid.orbital_data.first_observation_date)
                  )}
                </p>
              </>
            )}
          </div>
          {pastApproaches && (
            <Approaches
              heading="Past Approaches"
              approachData={pastApproaches}
            />
          )}
          {futureApproaches && (
            <Approaches
              heading="Future Approaches"
              approachData={futureApproaches}
            />
          )}
        </div>
      </main>
    )
  );
};

export default AsteroidPage;
