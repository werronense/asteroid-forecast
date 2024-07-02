import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";

import Header from "./components/Header";

import ForecastPage from "./pages/ForecastPage";
import AsteroidPage from "./pages/AsteroidPage";
import ErrorPage from "./pages/ErrorPage";

const { VITE_API_BASE_URL } = import.meta.env;

function App() {
  const [_asteroids, _setAsteroids] = useState({});

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/asteroids`);
        console.log(response.data.near_earth_objects);
      } catch (err) {
        console.error("GET request to /asteroids endpoint failed: ", err);
      }
    }

    fetchAsteroids();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ForecastPage />} />
        <Route path="/asteroids/:id" element={<AsteroidPage />} />
        <Route
          path="*"
          element={<ErrorPage errorCode={404} errorMessage="Page not found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
