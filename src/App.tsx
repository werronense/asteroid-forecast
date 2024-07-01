import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";

import ForecastPage from "./pages/ForecastPage";
import AsteroidPage from "./pages/AsteroidPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
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
