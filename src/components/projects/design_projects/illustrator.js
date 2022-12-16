import ramen from "../../../assets/design_project_screenshots/ramen.jpg";
import doughnuts from "../../../assets/design_project_screenshots/doughnuts.jpg";

import { useState, useEffect } from "react";
const Illustrator = () => {
  let illustratorImageList = [ramen, doughnuts];
  const [illustratorImage, setIllustratorImage] = useState(
    illustratorImageList[0]
  );
  var trans = document.querySelector(".project-transparent");
  var illustrator_img = document.querySelector(".illustrator-image");

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    illustrator_img = document.querySelector(".illustrator-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setIllustratorImage(imageList[0]);
    } else {
      setIllustratorImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setIllustratorImage(imageList[imageList.length - 1]);
    } else {
      setIllustratorImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("project-transparent--show");
    illustrator_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    illustrator_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div illustrator-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() => handleLeft(illustratorImageList, illustratorImage)}
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={illustratorImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
          type="button"
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() => handleRight(illustratorImageList, illustratorImage)}
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column flex-lg-row align-items-center">
        <div className="project-preview-div" type="button">
          <img
            src={illustratorImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
        <div className="project-desc-alt d-flex flex-column text-lg-end text-start ms-lg-4 w-100">
          <h4 className="project-name">Illustrator Graphics</h4>
          <p className="project-desc-alt-text h4">
            <span>
              Graphics created in{" "}
              <span className="green">Adobe Illustrator</span>, with
              experimentation on shading style.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Illustrator;
