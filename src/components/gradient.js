import React from "react";
import logo_black from "../assets/logo_black.png";
import logo_white from "../assets/logo_white.png";
import resume from "../assets/Jonathan Shih's resume.pdf";
import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const Gradient = ({ darkMode }) => {
  var blob;

  useEffect(() => {
    blob = document.getElementById("blob");
  }, [darkMode]);

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { fill: "forwards" }
    );
  };
  return (
    <div className="background-wrapper">
      <div id="blob"></div>
      <div id="blur"></div>
    </div>
  );
};

export default Gradient;
