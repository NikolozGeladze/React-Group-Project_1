
import { useState, createContext, useContext } from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import "./App.css";
import StartMenu from "./components/startMenu/StartMenu";
import Score from "./components/startMenu/Score";
import Navbar from "./components/startMenu/Navbar"; 

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {/* <Navbar />    */}
      {/* <StartMenu/> */}
      <Score/>

      <Routes>
        {}
      </Routes>
    </LanguageContext.Provider>
  );
}

export default App;


