import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import NavigationTopbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="App">
        <div className="topbar">
          <NavigationTopbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
        <BrowserRouter>
          <div className="mainBod"></div>
        </BrowserRouter>
        <SideBar darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
