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
function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
    </Routes>
    // <div>
    //   <NavLink to="/home">Home</NavLink>
    //   <NavLink to="/about">About</NavLink>
    // </div>
  );
}

export default App;
