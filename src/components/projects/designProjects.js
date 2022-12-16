import { useEffect } from "react";
import Illustrator from "./design_projects/illustrator";
import Siddhartha from "./design_projects/siddhartha";
import WordPoster from "./design_projects/wordPoster";
import ProjectProposal from "./design_projects/projectProposal";

const DesignProjects = () => {
  var trans = document.querySelector(".project-transparent");
  var siddhartha_img = document.querySelector(".siddhartha-image");
  var wordPoster_img = document.querySelector(".wordPoster-image");
  var illustrator_img = document.querySelector(".illustrator-image");
  var projectProposal_img = document.querySelector(".projectProposal-image");

  let imagesMap = [
    siddhartha_img,
    wordPoster_img,
    illustrator_img,
    projectProposal_img,
  ];

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    siddhartha_img = document.querySelector(".siddhartha-image");
    wordPoster_img = document.querySelector(".wordPoster-image");
    illustrator_img = document.querySelector(".illustrator-image");
    projectProposal_img = document.querySelector(".projectProposal-image");

    imagesMap = [
      siddhartha_img,
      wordPoster_img,
      illustrator_img,
      projectProposal_img,
    ];
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
        <Illustrator />
        <ProjectProposal />
      </div>
    </div>
  );
};
export default DesignProjects;
