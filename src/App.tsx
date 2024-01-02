import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter basename="http://JIK-K.github.io/GameLand">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <Route path="/home" Component={Home} />
    </BrowserRouter>
  );
}

export default App;
