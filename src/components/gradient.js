import React from "react";
import { useEffect } from "react";

const Gradient = ({ theme, loading }) => {
  var blob;

  useEffect(() => {
    blob = document.getElementById("blob");
  }, [theme, loading]);

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
