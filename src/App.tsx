import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";

import { DailyForecast } from "./interfaces/forecast.ts";
import Header from "./components/Header/Header.tsx";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import AsteroidPage from "./pages/AsteroidPage/AsteroidPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

const { VITE_API_BASE_URL } = import.meta.env;

const App: React.FC = () => {
  const [forecast, setForecast] = useState<DailyForecast[]>([]);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/asteroids`);

        const dateKeys = Object.keys(response.data.near_earth_objects);
        const forecastData = dateKeys.sort().map((key) => {
          return {
            date: key,
            asteroids: [...response.data.near_earth_objects[key]],
          };
        });

        setForecast(forecastData);
      } catch (err) {
        console.error("GET request to /asteroids endpoint failed: ", err);
      }
    };

    fetchAsteroids();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={forecast.length > 0 && <ForecastPage forecast={forecast} />}
        />
        <Route path="/asteroids/:id" element={<AsteroidPage />} />
        <Route
          path="*"
          element={<ErrorPage errorCode={404} errorMessage="Page not found" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
