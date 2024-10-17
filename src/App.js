import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect, useState } from "react";

import NavigationTopbar from "./components/navbar/topnav.js";
import SideBar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Experiences from "./components/experiences/experiences";
import Work from "./components/projects/projects";
import Contact from "./components/contact";
import Gradient from "./components/gradient.js";
import LogoAnimation from "./assets/logoanimation.gif";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const resetGif = () => {
    var img = document.getElementById("gif");
    var imageUrl = img.src;
    img.src = "";
    img.src = imageUrl.split("?")[0] + "?" + new Date().getTime();
  };

  useEffect(() => {
    setTimeout(() => {
      resetGif();
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <div className={darkMode ? "dark-mode App" : "light-mode App"}>
      <div className={`overlay ${!loading && "d-none"}`}>
        <img
          className={`logoani ${!loading && "d-none"}`}
          id="gif"
          src={LogoAnimation}
          alt={"loading"}
        />
      </div>
      <NavigationTopbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content-wrapper">
        <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
        <AboutMe />
        <Experiences />
        <Work />
        <Contact darkMode={darkMode} />
      </div>
      <SideBar />
      <Gradient darkMode={darkMode} loading={loading} />
    </div>
  );
}

export default App;
