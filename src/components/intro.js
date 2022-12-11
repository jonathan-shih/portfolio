const Intro = ({ darkMode, setDarkMode }) => {
  return (
    <div className="segment-wrapper d-flex">
      <div className="intro-div d-flex flex-column">
        <div className="d-flex flex-column align-items-start">
          <h3 className="sub-text"> Hi, my name is </h3>
          <div className="d-flex name-div">
            <h1 className="display-1"> Jonathan </h1>
            <h1 className="ms-2 green display-1"> Shih </h1>
          </div>
          <h3 className="intro-text">
            I'm a software engineer and designer, welcome to my portfolio
            website! This website was coded with ReactJS, and is completely
            reactive for all screen sizes. Feel free to scroll down or use the
            links on the top right to learn more about me.
          </h3>
          <div className={darkMode ? "intro-text sub-text d-flex" : "d-none"}>
            <h4>
              ps: click the
              <i
                type="button"
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
                  type="button"
                  className="fa-solid fa-moon mode-switch"
                  onClick={() => setDarkMode(!darkMode)}
                />
              }{" "}
              to see the website in dark mode!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
