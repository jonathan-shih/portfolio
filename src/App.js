import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";

import NavigationTopbar from "./components/navbar/topnav.js";
import SideBar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Experiences from "./components/experiences/experiences";
import Work from "./components/projects/projects";
import Contact from "./components/contact";
import Gradient from "./components/gradient.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode App" : "light-mode App"}>
      <NavigationTopbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content-wrapper">
        <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutMe />
        <Experiences />
        <Work />
        <Contact darkMode={darkMode} />
      </div>
      <SideBar />
      <Gradient darkMode={darkMode} />
    </div>
  );
}

export default App;
