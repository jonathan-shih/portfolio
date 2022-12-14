import CoveyTown from "./cs_projects/coveyTown";
import MemeDb from "./cs_projects/memeDb";
import ImageProcessing from "./cs_projects/imageProcessing";
import Maze from "./cs_projects/maze";
import { useEffect } from "react";

const ProgrammingProjects = () => {
  var trans = document.querySelector(".project-transparent");
  var covey_ingame_img = document.querySelector(".covey-ingame-image");
  var memedb_img = document.querySelector(".memedb-image");
  var gui_img = document.querySelector(".image-gui");
  var maze_img = document.querySelector(".maze-image");
  let imagesMap = [covey_ingame_img, memedb_img, gui_img, maze_img];

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    covey_ingame_img = document.querySelector(".covey-ingame-image");
    memedb_img = document.querySelector(".memedb-image");
    gui_img = document.querySelector(".image-gui");
    maze_img = document.querySelector(".maze-image");
    imagesMap = [covey_ingame_img, memedb_img, gui_img, maze_img];
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
    <div className="programming-project-wrapper">
      <div className="project-transparent" onClick={() => unFocusImage()}></div>
      <div className="projects-div">
        <CoveyTown />
        <MemeDb />
        <ImageProcessing />
        <Maze />
      </div>
    </div>
  );
};
export default ProgrammingProjects;
