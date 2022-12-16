import minion_pro from "../../../assets/design_project_screenshots/minion_pro.jpg";
import minion_pro_alt from "../../../assets/design_project_screenshots/minion_pro_alt.jpg";
import futura from "../../../assets/design_project_screenshots/futura.jpg";
import garamond from "../../../assets/design_project_screenshots/garamond.jpg";

import { useState, useEffect } from "react";
const WordPoster = () => {
  let wordPosterImageList = [minion_pro, minion_pro_alt, futura, garamond];
  const [wordPosterImage, setWordPosterImage] = useState(
    wordPosterImageList[0]
  );
  var trans = document.querySelector(".project-transparent");
  var wordPoster_img = document.querySelector(".wordPoster-image");

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    wordPoster_img = document.querySelector(".wordPoster-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setWordPosterImage(imageList[0]);
    } else {
      setWordPosterImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setWordPosterImage(imageList[imageList.length - 1]);
    } else {
      setWordPosterImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("project-transparent--show");
    wordPoster_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    wordPoster_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div wordPoster-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() => handleLeft(wordPosterImageList, wordPosterImage)}
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={wordPosterImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
          type="button"
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() => handleRight(wordPosterImageList, wordPosterImage)}
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column-reverse flex-lg-row align-items-center">
        <div className="project-desc d-flex flex-column text-start w-100">
          <h4 className="project-name">Font Posters</h4>
          <p className="project-desc-text h4">
            <span>
              {" "}
              This series of posters were designed in{" "}
              <span className="green">Adobe InDesign</span> to showcase
              different fonts and their unique characteristics.
              <br></br>
              <br></br>
              All posters were made using their respective font and provide the
              viewers a look in to the typeface.
            </span>
          </p>
        </div>
        <div className="project-preview-div wordPoster" type="button">
          <img
            src={wordPosterImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default WordPoster;
