import React from "react";
import logo_black from "../assets/logo_black.png";
import logo_white from "../assets/logo_white.png";
import resume from "../assets/Jonathan Shih's resume.pdf";
import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const NavigationTopbar = ({ darkMode, setDarkMode }) => {
  const [lastScroll, setLastScroll] = useState(0);
  const handleScroll = () => {
    const nav = document.querySelector(".nav-bar");
    const transparent = document.querySelector(".transparent");
    const currentScroll = window.pageYOffset;
    if (window.pageYOffset < 10) {
      nav.classList.remove("nav-bar--hidden");
      transparent.classList.remove("transparent--hidden");
      
      transparent.classList.remove("nav-bar-backdrop-black");
      transparent.classList.remove("nav-bar-backdrop-white");
    } else if (lastScroll < currentScroll && currentScroll - lastScroll > 10) {
      nav.classList.add("nav-bar--hidden");
      transparent.classList.add("transparent--hidden");
    } else if (lastScroll > currentScroll && lastScroll - currentScroll > 5) {
      nav.classList.remove("nav-bar--hidden");
      transparent.classList.remove("transparent--hidden");
      setShadow();
    }

    setLastScroll(currentScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  useEffect(() => {
    setShadow();
  }, [darkMode])
  useEffect(()=> {
    const transparent = document.querySelector(".transparent");
    transparent.classList.remove("nav-bar-backdrop-black");
    transparent.classList.remove("nav-bar-backdrop-white");
  }, [])
  const setShadow = () => {
    const transparent = document.querySelector(".transparent");
    if(darkMode){
      transparent.classList.remove("nav-bar-backdrop-white");
      transparent.classList.add("nav-bar-backdrop-black");
    } else {
      transparent.classList.remove("nav-bar-backdrop-black");
      transparent.classList.add("nav-bar-backdrop-white");
    }
  }
  var smallNav = document.querySelector(".small-nav");
  var smallNavTransparent = document.querySelector(".small-nav-transparent");
  useEffect(() => {
    smallNav = document.querySelector(".small-nav");
    smallNavTransparent = document.querySelector(".small-nav-transparent");
  }, []);
  const showSmallNav = () => {
    smallNav.classList.add("small-nav--show");
    smallNavTransparent.classList.add("small-nav-transparent--show");
  };

  const hideSmallNav = () => {
    smallNav.classList.remove("small-nav--show");
    smallNavTransparent.classList.remove("small-nav-transparent--show");
    console.log("hide");
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
            type="button"
            onClick={() => Scroll.animateScroll.scrollToTop({ duration: 100 })}
          />
        </div>
        <i
          type="button"
          className="fa-solid fa-bars d-md-none h3"
          onClick={() => showSmallNav()}
        ></i>
        <ul className="nav d-none d-md-flex h6">
          <li className="nav-item" type="button">
            <Link
              to="aboutme-div"
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
              className="nav-link"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item" type="button">
            <Link
              to="experiences-div"
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
              className="nav-link"
            >
              Experiences
            </Link>
          </li>
          <li className="nav-item" type="button">
            <Link
              to="projects-div"
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={resume} target="_blank">
              Resume
            </a>
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
      <div className="small-nav d-md-none flex-column align-items-end">
        <div className="small-nav-wrapper">
          <ul className="h5">
            <i
              type="button"
              className="fa-solid fa-xmark h3"
              onClick={() => hideSmallNav()}
            ></i>
            <li className="nav-item" type="button">
              <Link
                to="aboutme-div"
                spy={true}
                smooth={true}
                offset={-200}
                duration={100}
                className="nav-link"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item" type="button">
              <Link
                to="experiences-div"
                spy={true}
                smooth={true}
                offset={-200}
                duration={100}
                className="nav-link"
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item" type="button">
              <Link
                to="projects-div"
                spy={true}
                smooth={true}
                offset={-200}
                duration={100}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={resume} target="_blank">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <i
                type="button"
                className={
                  darkMode
                    ? "fa-solid fa-sun mode-switch"
                    : "fa-solid fa-moon mode-switch"
                }
                onClick={() => setDarkMode(!darkMode)}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="small-nav-transparent d-md-none"
        onClick={() => hideSmallNav()}
      ></div>
    </div>
  );
};

export default NavigationTopbar;
