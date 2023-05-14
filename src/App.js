import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/BrunaGabriel" >Bruna Gabriel </a>
          and is{" "}
          <a href="https://github.com/BrunaGabriel/react-weather-app">
            opoen-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
