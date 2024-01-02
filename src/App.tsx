import React from "react";
import "./App.css";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import JustPage from "./pages/Just/JustPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="https://jik-k.github.io/GameLand">
      <Routes>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Route path="/" element={<JustPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
