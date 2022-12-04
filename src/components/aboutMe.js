const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`d-flex ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="intro-div d-flex flex-column">
        <div className="d-flex flex-column align-items-start">
          <h3 className="sub-text section-header"> About Me </h3>
          <h3 className="intro-text">
            My name is Jonathan Shih and I am currently a Junior studying
            Computer Science and Design at Northeastern University.
          </h3>
          <div className={darkMode ? "intro-text sub-text d-flex" : "d-none"}>
            <h4>
              ps: click the
              <i
                type="text"
                className="fa-solid fa-sun mode-switch"
                onClick={() => setDarkMode(!darkMode)}
              />{" "}
              to see the website in light mode!
            </h4>
          </div>
          <div className={darkMode ? "d-none" : "intro-text sub-text d-flex"}>
            <h4>
              ps: click the
              {
                <i
                  type="text"
                  className="fa-solid fa-moon mode-switch"
                  onClick={() => setDarkMode(!darkMode)}
                />
              }{" "}
              to see the website in dark mode!
            </h4>
          </div>
        </div>
      </div>
      <div className="aboutme-end" id="aboutme-end"></div>
    </div>
  );
};

export default AboutMe;
