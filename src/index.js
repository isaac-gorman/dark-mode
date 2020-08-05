import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
// import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [className, setClassName] = useState("App");

  const setMode = () => {
    if (darkMode === false) {
      return setClassName("App");
    }

    if (darkMode === true) {
      return setClassName("dark-mode App");
    }
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setMode();
    postLocalStorage();
  };

  const postLocalStorage = () => {
    localStorage.setItem("darkMode", darkMode);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={className}>
      {/* <Navbar setMode={setMode} /> */}
      <nav className="navbar">
        <h1>Crypto Tracker</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
            // className="toggle toggled"
          />
        </div>
      </nav>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
