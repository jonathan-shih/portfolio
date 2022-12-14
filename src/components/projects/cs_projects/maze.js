import maze_player from "../../../assets/cs_project_screenshots/maze_player.png";
import maze_bfs from "../../../assets/cs_project_screenshots/maze_bfs.gif";
import maze_dfs from "../../../assets/cs_project_screenshots/maze_dfs.gif";

import { useState, useEffect } from "react";
const Maze = () => {
  let mazeImageList = [maze_player, maze_bfs, maze_dfs];
  const [mazeImage, setMazeImage] = useState(mazeImageList[0]);
  var trans = document.querySelector(".project-transparent");
  var maze_img = document.querySelector(".maze-image");

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    maze_img = document.querySelector(".maze-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setMazeImage(imageList[0]);
    } else {
      setMazeImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setMazeImage(imageList[imageList.length - 1]);
    } else {
      setMazeImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("project-transparent--show");
    maze_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    maze_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div maze-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() => handleLeft(mazeImageList, mazeImage)}
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={mazeImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() => handleRight(mazeImageList, mazeImage)}
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column-reverse flex-lg-row align-items-center">
        <div className="project-desc d-flex flex-column text-start">
          <h4 className="project-name">Maze Generation</h4>
          <p className="project-desc-text h4">
            <span>
              This game was created in
              <span className="green"> Java</span>. Random solvable rectangular
              mazes are generated for the player to solve.
            </span>
            <br></br>
            <br></br>
            <span className=" h4">
              Mazes are generated using
              <span className="green"> Kruskal's </span> and{" "}
              <span className="green"> Dijkstra's </span>
              algorithms. Utilzing the aboved mentioned algorithms, object
              oriented princpies and data structures, players are able to either
              manually solve the maze, or visualize finding the best path using{" "}
              <span className="green"> breath first search</span> and{" "}
              <span className="green"> depth first search</span>.
            </span>
          </p>
        </div>
        <div className="project-preview-div" type="button">
          <img
            src={mazeImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Maze;
