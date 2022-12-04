import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import { useState, useRef } from "react";

import NavigationTopbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const abtMe = useRef(null);

  return (
    <div className={darkMode ? "dark-mode App" : "light-mode App"}>
      <NavigationTopbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
      <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
      <BrowserRouter></BrowserRouter>
      <div className="segment-wrapper"></div>
      <SideBar darkMode={darkMode} />
    </div>
  );
}

export default App;
