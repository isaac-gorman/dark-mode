import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  // console.log("I am useDarkMode from navBar" ,useDarkMode())
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
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
  );
};

export default Navbar;
