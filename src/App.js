import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import NavigationTopbar from "./components/navbar.js";
import SideBar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode App" : "light-mode App"}>
      <NavigationTopbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content-wrapper">
        <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutMe />
        <BrowserRouter></BrowserRouter>
        <div className="segment-wrapper"></div>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
