import logo_black from '../assets/logo_black.png';
import logo_white from '../assets/logo_white.png';

const Contact = ({ theme }) => {
  return (
    <div className="contact-div">
      <div className="d-flex justify-content-between sub-text">
        <div className="line"></div>
        <div className="d-flex flex-column text">
          <h5> designed and built by</h5>
          <h4> Jonathan Shih </h4>
        </div>
        <div className="line"></div>
      </div>
      <div className="d-flex contact-info justify-content-center d-md-none">
        <a
          href="https://www.linkedin.com/in/jonathan-shih/"
          target="_blank"
          className="link-icon"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Jonathan-Shih"
          target="_blank"
          className="link-icon"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <h6> shih.jo@northeastern.edu </h6>
      </div>
      <img
        className="logo"
        src={theme === 'dark' ? logo_white : logo_black}
      ></img>
    </div>
  );
};
export default Contact;
