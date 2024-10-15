const Intro = ({ darkMode, setDarkMode }) => {
  return (
    <div className="segment-wrapper d-flex">
      <div className="intro-div d-flex flex-column">
        <div className="d-flex flex-column align-items-start">
          <h4 className="sub-text"> Hi, my name is </h4>
          <div className="d-flex name-div">
            <h1 className="display-1"> Jonathan </h1>
            <h1 className="ms-2 green display-1"> Shih </h1>
          </div>
          <h4 className="intro-text">
            I'm a software engineer and designer, welcome to my portfolio
            website! This website was coded with ReactJS, feel free to scroll
            down or use the links on the top right to learn more about me.
          </h4>
          <div className={darkMode ? "intro-text sub-text d-flex" : "d-none"}>
            <h5>
              ps:
              <i
                type="button"
                className="fa-solid fa-sun mode-switch"
                onClick={() => setDarkMode(!darkMode)}
              />{" "}
              changes the website to light mode!
            </h5>
          </div>
          <div className={darkMode ? "d-none" : "intro-text sub-text d-flex"}>
            <h5>
              ps:
              {
                <i
                  type="button"
                  className="fa-solid fa-moon mode-switch"
                  onClick={() => setDarkMode(!darkMode)}
                />
              }{" "}
              changes the website to dark mode!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
