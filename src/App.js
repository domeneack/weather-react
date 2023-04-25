import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="footer">
        This project was coded by{" "}
        <a href="https://tangerine-moonbeam-52db1f.netlify.app/">
          Domeneack Foster
        </a>{" "}
        and is{" "}
        <a href="https://github.com/domeneack/weather-react">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
