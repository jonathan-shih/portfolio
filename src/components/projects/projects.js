import React, { useState } from "react";
import ProgrammingProjects from "./programmingProjects";
import DesignProjects from "./designProjects";

const Work = () => {
  const [active, setActive] = useState("programming");
  return (
    <div className="projects-wrapper">
      <div className="projects-div d-flex flex-column align-items-start">
        <h3 className="sub-text section-header"> Projects </h3>
        <div className="d-flex select">
          <li
            className={`${
              active === "programming" ? "list-item-active" : "list-item"
            }`}
            type="button"
            onClick={() => setActive("programming")}
          >
            <h5>Programming</h5>
          </li>
          <li
            className={`${
              active === "design" ? "list-item-active" : "list-item"
            }`}
            type="button"
            onClick={() => setActive("design")}
          >
            <h5>Design</h5>
          </li>
        </div>
        {active === "programming" ? (
          <ProgrammingProjects />
        ) : (
          <DesignProjects />
        )}
      </div>
    </div>
  );
};

export default Work;
