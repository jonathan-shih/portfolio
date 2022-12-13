import logo_black from "../assets/logo_black.png";
import logo_white from "../assets/logo_white.png";

const Contact = ({darkMode}) => {
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
            <img className="logo" src={darkMode ? logo_white : logo_black}></img>
        </div>
    )
}
export default Contact;