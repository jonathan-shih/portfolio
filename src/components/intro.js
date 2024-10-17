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
          <div className={"intro-text sub-text d-flex"}>
            <h5>
              Click
              <i
                type="button"
                className={`fa-solid mode-switch ${
                  darkMode ? "fa-sun" : "fa-moon"
                }`}
                onClick={() => setDarkMode(!darkMode)}
              />{" "}
              to view the website in&nbsp;
            </h5>
            {darkMode ? <h5>light</h5> : <h5>dark</h5>}
            <h5>&nbsp;mode!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
