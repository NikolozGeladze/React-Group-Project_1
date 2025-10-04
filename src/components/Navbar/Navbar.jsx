import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useParams } from "react-router-dom";

const Navbar = ( ) => {
  const { quizSubject } = useParams();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedLanguage = localStorage.getItem("language") || "en";

    setDarkMode(savedDarkMode);
    setLanguage(savedLanguage);

    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-left">
          <div className="icon-circle">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="header-title">{quizSubject}</span>
        </div>

        <div className="header-right">

          <div className="navbar-controls">
            <div className="theme-toggle" onClick={toggleTheme}>
              <span className="sun-moon"><i class="fa-solid fa-sun"></i></span>
              <div className={`switch ${darkMode ? "active" : ""}`}>
                <div className="circle"></div>
              </div>
              <span className="sun-moon"><i class="fa-solid fa-moon"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;