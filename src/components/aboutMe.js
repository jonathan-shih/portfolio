import profile_img from "../assets/profile_img.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="aboutme-div d-flex flex-column-reverse flex-md-row">
        <div className="aboutme-text-div d-flex flex-column align-items-start">
          <h3 className="sub-text section-header"> About Me </h3>
          <h4 className="aboutme-text">
            My name is Jonathan Shih and I am currently a Junior studying
            Computer Science and Design at Northeastern University. I have
            interests in Software Engineering, Web Developement and UI/UX
            Design.
          </h4>
          <h4 className="aboutme-text">
            As an interdicipinary student studying computer science and design,
            I am able to leverage both logical and creative approaches when
            solving problems. I strive to create clean and cleverly designed
            code as well as visually appealing interfaces and designs.
          </h4>
          <h4 className="aboutme-text">
            Having lived in Hong Kong, China and the US, I have a disctict
            cultural perspective that allows me to effectively communicate and
            floursih in all kinds of environments, making me a great team
            player. I am adapable and quick learning, and always excited to
            learn!
          </h4>
        </div>
        <div className="profile-div">
          <img src={profile_img} className="profile-img"></img>
          <div className="profile-highlight" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
