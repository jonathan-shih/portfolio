import memedb_interact from "../../../assets/cs_project_screenshots/memedb_interact.png";
import memedb_search from "../../../assets/cs_project_screenshots/memedb_search.png";
import memedb_topmeme from "../../../assets/cs_project_screenshots/memedb_topmeme.png";

import { useState, useEffect } from "react";
const MemeDb = () => {
  let memeDbImageList = [memedb_interact, memedb_search, memedb_topmeme];
  const [memeImage, setMemeImage] = useState(memeDbImageList[0]);
  var trans = document.querySelector(".programming-project-transparent");
  var memedb_img = document.querySelector(".memedb_image");

  useEffect(() => {
    trans = document.querySelector(".programming-project-transparent");
    memedb_img = document.querySelector(".memedb_image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setMemeImage(imageList[0]);
    } else {
      setMemeImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setMemeImage(imageList[imageList.length - 1]);
    } else {
      setMemeImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("programming-project-transparent--show");
    memedb_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("programming-project-transparent--show");
    memedb_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div className="projects-div d-flex flex-column-reverse flex-lg-row align-items-center">
      <div className="project-img-fullscreen-div memedb_image">
        <img
          src={memeImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
        ></img>
        <h2
          className="carousel-button-left"
          type="button"
          onClick={() => handleLeft(memeDbImageList, memeImage)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </h2>
        <h2
          className="carousel-button-right"
          type="button"
          onClick={() => handleRight(memeDbImageList, memeImage)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </h2>
      </div>
      <div className="project-desc d-flex flex-column text-start">
        <h4 className="project-name">OMemeDB</h4>
        <p className="project-desc-text h4">
          <span>This website utilzies</span>
          <span className="green"> ReactJS, NodeJS and Redux</span>
          <span>
            . OMemeDb allowed users to view and interact with the current top
            100 memes
          </span>
          <br></br>
          <br></br>
          <span className=" h4">Meme data was fetched through an</span>
          <span className="green"> external API </span>
          <span>
            - ImgFlip. With that in mind, users were are able create and login
            to an account, which then allowed them to save, like and comment on
            memes. Meme and user data is stored utilzing
          </span>
          <span className="green"> MongoDB</span>
          <span> allowing for quick data retreival</span>
        </p>
      </div>
      <div className="project-preview-div">
        <img
          src={memeImage}
          className="project-img"
          onClick={() => focusImage("covey_ingame")}
        ></img>
      </div>
    </div>
  );
};

export default MemeDb;
