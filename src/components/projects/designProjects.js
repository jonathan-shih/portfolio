import { useEffect } from "react";
import Siddhartha from "./design_projects/siddhartha";

const DesignProjects = () => {
  var trans = document.querySelector(".project-transparent");
  var siddhartha_img = document.querySelector(".siddhartha-image");
  let imagesMap = [siddhartha_img];

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    siddhartha_img = document.querySelector(".siddhartha-image");
    imagesMap = [siddhartha_img];
  }, []);

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    imagesMap.forEach((image) => {
      if (image.classList.contains("project-img-fullscreen-div--show")) {
        image.classList.remove("project-img-fullscreen-div--show");
      }
    });
  };
  return (
    <div>
      <div className="project-transparent" onClick={() => unFocusImage()}></div>
      <div className="projects-div">
        <Siddhartha />
      </div>
    </div>
  );
};
export default DesignProjects;
