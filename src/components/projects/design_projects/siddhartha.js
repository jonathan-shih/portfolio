import siddhartha_blue from "../../../assets/design_project_screenshots/siddhartha_blue.jpg";
import siddhartha_yellow from "../../../assets/design_project_screenshots/siddhartha_yellow.jpg";
import siddhartha_red from "../../../assets/design_project_screenshots/siddhartha_red.jpg";

import { useState, useEffect } from "react";
const Siddhartha = () => {
  let siddharthaImageList = [
    siddhartha_blue,
    siddhartha_yellow,
    siddhartha_red,
  ];
  const [siddharthaImage, setSiddharthaImage] = useState(
    siddharthaImageList[0]
  );
  var trans = document.querySelector(".project-transparent");
  var siddhartha_img = document.querySelector(".siddhartha-image");

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    siddhartha_img = document.querySelector(".siddhartha-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setSiddharthaImage(imageList[0]);
    } else {
      setSiddharthaImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setSiddharthaImage(imageList[imageList.length - 1]);
    } else {
      setSiddharthaImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("project-transparent--show");
    siddhartha_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    siddhartha_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div siddhartha-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() => handleLeft(siddharthaImageList, siddharthaImage)}
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={siddharthaImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() => handleRight(siddharthaImageList, siddharthaImage)}
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column flex-lg-row align-items-center">
        <div className="project-preview-div" type="button">
          <img
            src={siddharthaImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
        <div className="project-desc-alt d-flex flex-column text-lg-end text-start ms-lg-4 w-100">
          <h4 className="project-name">Siddhartha Cover</h4>
          <p className="project-desc-alt-text h4">
            <span>
              Designed and created alternate covers for the Indian novel -
              Siddhartha.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Siddhartha;
