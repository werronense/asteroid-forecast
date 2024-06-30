import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

// Pages
import ForecastPage from "./pages/ForecastPage";
import AsteroidPage from "./pages/AsteroidPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForecastPage />} />
        <Route path="/asteroids/:id" element={<AsteroidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
