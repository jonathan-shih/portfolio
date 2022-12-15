import { useEffect } from "react";
import Siddhartha from "./design_projects/siddhartha";
import WordPoster from "./design_projects/wordPoster";

const DesignProjects = () => {
  var trans = document.querySelector(".project-transparent");
  var siddhartha_img = document.querySelector(".siddhartha-image");
  var wordPoster_img = document.querySelector(".wordPoster-image");
  let imagesMap = [siddhartha_img, wordPoster_img];

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    siddhartha_img = document.querySelector(".siddhartha-image");
    wordPoster_img = document.querySelector(".wordPoster-image");
    imagesMap = [siddhartha_img, wordPoster_img];
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
        <WordPoster />
      </div>
    </div>
  );
};
export default DesignProjects;
