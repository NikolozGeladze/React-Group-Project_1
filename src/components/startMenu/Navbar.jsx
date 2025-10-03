import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
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

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ge" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    console.log("Language changed to:", newLanguage);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {}
        <div className="navbar-controls">
          <div className="language-toggle" onClick={toggleLanguage}>
            <span className={`lang-option ${language === "en" ? "active" : ""}`}>EN</span>
            <div className="language-switch">
              <div className={`language-slider ${language === "ge" ? "georgian" : "english"}`}></div>
            </div>
            <span className={`lang-option ${language === "ge" ? "active" : ""}`}>GE</span>
          </div>
          
          <div className="theme-toggle" onClick={toggleTheme}>
            <span className="sun">☀️</span>
            <div className={`switch ${darkMode ? "active" : ""}`}>
              <div className="circle"></div>
            </div>
            <span className="moon">🌙</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;