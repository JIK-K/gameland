import React from "react";
import "./App.css";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";

function App() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default App;
