import covey_ingame from "../../assets/cs_project_screenshots/covey_ingame.png";

const ProgrammingProjects = () => {
  return (
    <div>
      <div className="projects-div d-flex flex-column flex-lg-row">
        <div className="project-preview-div">
          <img src={covey_ingame} className="project-img"></img>
        </div>
        <div className="project-desc-alt d-flex flex-column align-items-end">
          <h4 className="project-name">Covey Town Auth</h4>
          <h4 className="project-desc-alt-text">
            My name is Jonathan Shih and I am currently a Junior studying
            Computer Science and Design at Northeastern University. I have
            interests in Software Engineering, Web Developement and UI/UX
            Design.
          </h4>
          <h4 className="project-desc-alt-text">
            As an interdicipinary student studying computer science and design,
            I am able to leverage both logical and creative approaches when
            solving problems. I strive to create clean and cleverly designed
            code as well as visually appealing interfaces and designs.
          </h4>
        </div>
      </div>
    </div>
  );
};
export default ProgrammingProjects;
