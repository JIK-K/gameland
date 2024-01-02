import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import HomePage from "../pages/Home/HomePage";
import JustPage from "../pages/Just/JustPage";
import React from "react";

function Router() {
  return (
    <BrowserRouter basename="https://jik-k.github.io/GameLand">
      <Routes>
        <Route path="/" element={<JustPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
