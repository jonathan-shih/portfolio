import covey_ingame from "../../assets/cs_project_screenshots/covey_ingame.png";
import { useEffect } from "react";

const ProgrammingProjects = () => {
  var trans = document.querySelector(".programming-project-transparent");
  var covey_ingame_img = document.querySelector(".covey_ingame_image");
  let imagesMap = new Map();
  imagesMap.set("covey_ingame", covey_ingame_img);
  useEffect(() => {
    trans = document.querySelector(".programming-project-transparent");
    covey_ingame_img = document.querySelector(".covey_ingame_image");
    imagesMap.set("covey_ingame", covey_ingame_img);
  }, []);
  const focusImage = (className) => {
    trans.classList.add("programming-project-transparent--show");
    imagesMap.get(className).classList.add("project-img-fullscreen--show");
  };
  const unFocusImage = () => {
    trans.classList.remove("programming-project-transparent--show");
    imagesMap.forEach((value, key) => {
      if (value.classList.contains("project-img-fullscreen--show")) {
        value.classList.remove("project-img-fullscreen--show");
      }
    });
  };
  return (
    <div className="programming-project-wrapper">
      <div
        className="programming-project-transparent"
        onClick={() => unFocusImage()}
      ></div>
      <div className="projects-div d-flex flex-column flex-lg-row align-items-center">
        <img
          src={covey_ingame}
          className="project-img-fullscreen covey_ingame_image"
          onClick={() => unFocusImage()}
        ></img>
        <div className="project-preview-div">
          <img
            src={covey_ingame}
            className="project-img"
            onClick={() => focusImage("covey_ingame")}
          ></img>
        </div>
        <div className="project-desc-alt d-flex flex-column align-items-end">
          <h4 className="project-name">Covey Town Auth</h4>
          <p className="project-desc-alt-text h4">
            <span>This project was coded in</span>
            <span className="green"> Typescript</span>
            <span>
              . An exstitng game - Covey Town was extended to add new
              functionality.
            </span>
            <br></br>
            <br></br>
            <span className=" h4">
              User authentication was integrated using Auth0, with user profiles
              stored in
            </span>
            <span className="green"> MongoDB</span>
            <span>
              . Users are able to update and view other user informations in
              game. They can also create public and private quick notes through
              integrated <span className="green"> Markdown UI</span>, which are
              viewable and editable in and out of game
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProgrammingProjects;
