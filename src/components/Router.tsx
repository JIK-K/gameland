import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import Home from "../pages/Home/HomePage";
import React from "react";

function Router() {
  return (
    <BrowserRouter basename="/GameLand">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
