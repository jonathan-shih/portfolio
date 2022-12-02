import React from "react";
import logo_black from "../assets/logo_black.png";
import logo_white from "../assets/logo_white.png";
import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const NavigationTopbar = ({ darkMode, setDarkMode }) => {
  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  const handleScroll = () => {
    const nav = document.querySelector(".nav-bar");
    const transparent = document.querySelector(".transparent");
    const currentScroll = window.pageYOffset;
    if (window.pageYOffset < 10) {
      nav.classList.remove("nav-bar--hidden");
      transparent.classList.remove("transparent--hidden");
    } else if (lastScroll < currentScroll && currentScroll - lastScroll > 10) {
      nav.classList.add("nav-bar--hidden");
      transparent.classList.add("transparent--hidden");
      console.log(window.pageYOffset);
    } else if (lastScroll > currentScroll && lastScroll - currentScroll > 5) {
      nav.classList.remove("nav-bar--hidden");
      transparent.classList.remove("transparent--hidden");
    }

    setLastScroll(currentScroll);
  };

  return (
    <div className="topbar">
      <div className="transparent"></div>
      <div className="d-flex align-items-center justify-content-between nav-bar">
        <div>
          <img
            src={darkMode ? logo_white : logo_black}
            alt="logo"
            className="logo"
            onClick={() => Scroll.animateScroll.scrollToTop({ duration: 100 })}
          />
        </div>
        <i class="fa-solid fa-bars d-md-none"></i>
        <ul className="nav d-none d-md-flex">
          <li className="nav-item">
            <Link
              to="aboutme-end"
              spy={true}
              smooth={true}
              duration={100}
              className="nav-link"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center switch-div">
              <i
                type="button"
                className={
                  darkMode
                    ? "fa-solid fa-sun mode-switch"
                    : "fa-solid fa-moon mode-switch"
                }
                onClick={() => setDarkMode(!darkMode)}
              ></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationTopbar;
