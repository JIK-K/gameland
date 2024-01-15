import React from "react";
import "./App.css";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import { styled } from "styled-components";
import SpinningSword from "./pages/Games/SpinningSword/SpinningSword";
function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/Games/SpinningSword" Component={SpinningSword} />
    </Routes>
  );
}

export default App;
