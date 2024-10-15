import project_proposal_1 from "../../../assets/design_project_screenshots/project_proposal_1.jpg";
import project_proposal_2 from "../../../assets/design_project_screenshots/project_proposal_2.jpg";

import { useState, useEffect } from "react";
const ProjectProposal = () => {
  let ProjectProposalImageList = [project_proposal_1, project_proposal_2];
  const [ProjectProposalImage, setProjectProposalImage] = useState(
    ProjectProposalImageList[0]
  );
  var trans = document.querySelector(".project-transparent");
  var projectProposal_img = document.querySelector(".projectProposal-image");

  useEffect(() => {
    trans = document.querySelector(".project-transparent");
    projectProposal_img = document.querySelector(".projectProposal-image");
  }, []);

  const handleRight = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === imageList.length - 1) {
      setProjectProposalImage(imageList[0]);
    } else {
      setProjectProposalImage(imageList[curIndex + 1]);
    }
  };

  const handleLeft = (imageList, curImage) => {
    let curIndex = imageList.indexOf(curImage);
    if (curIndex === 0) {
      setProjectProposalImage(imageList[imageList.length - 1]);
    } else {
      setProjectProposalImage(imageList[curIndex - 1]);
    }
  };

  const focusImage = () => {
    trans.classList.add("project-transparent--show");
    projectProposal_img.classList.add("project-img-fullscreen-div--show");
  };

  const unFocusImage = () => {
    trans.classList.remove("project-transparent--show");
    projectProposal_img.classList.remove("project-img-fullscreen-div--show");
  };

  return (
    <div>
      <div className="project-img-fullscreen-div projectProposal-image">
        <h2
          className="carousel-button-left d-flex align-items-center"
          type="button"
          onClick={() =>
            handleLeft(ProjectProposalImageList, ProjectProposalImage)
          }
        >
          <i className="fa-solid fa-chevron-left mx-auto"></i>
        </h2>
        <img
          src={ProjectProposalImage}
          className="project-img-fullscreen"
          onClick={() => unFocusImage()}
          type="button"
        ></img>
        <h2
          className="carousel-button-right d-flex align-items-center"
          type="button"
          onClick={() =>
            handleRight(ProjectProposalImageList, ProjectProposalImage)
          }
        >
          <i className="fa-solid fa-chevron-right mx-auto"></i>
        </h2>
      </div>
      <div className="projects-div d-flex flex-column-reverse flex-lg-row align-items-center">
        <div className="project-desc d-flex flex-column text-start w-75">
          <h5 className="project-name">Project Proposal</h5>
          <p className="project-desc-text h5">
            <span>
              {" "}
              Proposal spreads created in
              <span className="green"> Adobe InDesign</span> as a mock proposal.
              <br></br>
              <br></br>
              Stock background images were provided and we were tasked with
              creating a well designed proposal. All assets and spreads aside
              from the stock backgrounds were created by me.
            </span>
          </p>
        </div>
        <div className="project-preview-div wordPoster  w-100" type="button">
          <img
            src={ProjectProposalImage}
            className="project-img"
            onClick={() => focusImage()}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectProposal;
