import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import resume from "../../assets/Jonathan Shih's resume.pdf";

const SideNav = ({ theme, toggleTheme }) => {
  var smallNav = document.querySelector(".small-nav");
  var smallNavTransparent = document.querySelector(".small-nav-transparent");

  useEffect(() => {
    smallNav = document.querySelector(".small-nav");
    smallNavTransparent = document.querySelector(".small-nav-transparent");
  }, []);

  const hideSmallNav = () => {
    smallNav.classList.remove("small-nav--show");
    smallNavTransparent.classList.remove("small-nav-transparent--show");
    console.log("hide");
  };

  return (
    <div>
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
                onClick={() => hideSmallNav()}
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
                onClick={() => hideSmallNav()}
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
                onClick={() => hideSmallNav()}
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
                  theme==="dark"
                    ? "fa-solid fa-sun mode-switch"
                    : "fa-solid fa-moon mode-switch"
                }
                onClick={() => {
                  toggleTheme();
                  hideSmallNav();
                }}
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

export default SideNav;
