import React from "react";
import logo_black from "../assets/logo_black.png";
import logo_white from "../assets/logo_white.png";
import { useEffect, useState } from "react";

const NavigationTopbar = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
  };
  return (
    <div
      className={`d-flex align-items-center justify-content-between nav-bar `}
    >
      <div>
        <img
          src={darkMode ? logo_white : logo_black}
          alt="logo"
          className="logo"
        />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            About Me
          </a>
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
  );
};

export default NavigationTopbar;
