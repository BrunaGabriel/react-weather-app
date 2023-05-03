import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />

        <footer>
          This project was coded by Bruna Gabriel and is{" "}
          <a
            href="https://github.com/BrunaGabriel/react-weather-app"
            target="_blank"
          >
            opoen-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
