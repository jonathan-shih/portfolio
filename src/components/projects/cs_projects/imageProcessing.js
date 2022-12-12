import image_gui from "../../../assets/cs_project_screenshots/image_gui.png";

import { useState, useEffect } from "react";
const ImageProcessing = () => {
  var trans = document.querySelector(".programming-project-transparent");
  var gui_image = document.querySelector(".image-gui");

  useEffect(() => {
    trans = document.querySelector(".programming-project-transparent");
    gui_image = document.querySelector(".image-gui");
  }, []);

  const focusImage = () => {
    trans.classList.add("programming-project-transparent--show");
    gui_image.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("programming-project-transparent--show");
    gui_image.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div className="image-gui-div">
      <div className="project-img-fullscreen-div image-gui">
        <img
          src={image_gui}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
        ></img>
      </div>
      <div className="projects-div d-flex flex-column flex-lg-row align-items-center">
        <div className="project-preview-div" type="button">
          <img
            src={image_gui}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
        <div className="project-desc-alt d-flex flex-column text-lg-end text-start ms-lg-4 w-100">
          <h4 className="project-name">Image Processing</h4>
          <p className="project-desc-alt-text h4">
            <span>This image manipulator was coded in</span>
            <span className="green"> Java</span>
            <span>
              . Users are able to use either the GUI or upload a script to apply
              filters on uploaded images
            </span>
            <br></br>
            <br></br>
            <span className=" h4">
              Filters are a implemented through RGB manipulation, which are
              applied through the usages of{" "}
              <span className="green"> matrixes and kernels</span>. The tool is
              able to read and reformat images, allowing users to upload and
              export images in their preferred format (.ppm, .jpg/jpeg, .png).
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageProcessing;
