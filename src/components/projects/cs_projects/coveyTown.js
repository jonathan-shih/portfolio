import covey_ingame from "../../../assets/cs_project_screenshots/covey_ingame.png";
import covey_edit_notes from "../../../assets/cs_project_screenshots/covey_editnotes.png";
import covey_profile from "../../../assets/cs_project_screenshots/covey_profile.png";

import { useState, useEffect } from "react";
const CoveyTown = () => {
  let coveyImageList = [covey_ingame, covey_edit_notes, covey_profile];
  const [coveyImage, setCoveyImage] = useState(coveyImageList[0]);
  var trans = document.querySelector(".programming-project-transparent");
  var covey_ingame_img = document.querySelector(".covey-ingame-image");

  useEffect(() => {
    trans = document.querySelector(".programming-project-transparent");
    covey_ingame_img = document.querySelector(".covey-ingame-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setCoveyImage(imageList[0]);
    } else {
      setCoveyImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setCoveyImage(imageList[imageList.length - 1]);
    } else {
      setCoveyImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("programming-project-transparent--show");
    covey_ingame_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("programming-project-transparent--show");
    covey_ingame_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div covey-ingame-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() => handleLeft(coveyImageList, coveyImage)}
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={coveyImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() => handleRight(coveyImageList, coveyImage)}
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column flex-lg-row align-items-center">
        <div className="project-preview-div" type="button">
          <img
            src={coveyImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
        <div className="project-desc-alt d-flex flex-column text-lg-end text-start ms-lg-4">
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
              viewable and editable in and out of game.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoveyTown;
