import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import SpinningSword from "./pages/Games/SpinningSword/SpinningSword";
import BattleCity from "./pages/Games/BattleCity/BattleCity";
import SnailRace from "./pages/Games/SnailRace/SnailRace";
function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      {/* Games */}
      <Route path="/Games/SpinningSword" Component={SpinningSword} />
      <Route path="/Games/BattleCity" Component={BattleCity} />
      <Route path="/Games/SnailRace" Component={SnailRace} />
    </Routes>
  );
}

export default App;
