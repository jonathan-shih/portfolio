import { useEffect } from 'react';
import profile_img from '../assets/profile_img.jpg';

const AboutMe = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const profileImg = entry.target.querySelector('.profile-img');
        if (entry.isIntersecting) {
          profileImg.classList.add('profile-img-animation');
          console.log('trigger');
          return;
        }
        profileImg.classList.remove('profile-img-animation');
      });
    });

    observer.observe(document.querySelector('.profile-div'));
  }, []);

  return (
    <div className="aboutme-wrapper">
      <div className="aboutme-div d-flex flex-column-reverse flex-md-row">
        <div className="aboutme-text-div d-flex flex-column align-items-start">
          <h3 className="sub-text section-header"> About Me </h3>
          <h5 className="aboutme-text">
            My name is Jonathan Shih and I have just recently recieved my
            Bachelor of Science in Computer Science and Design at Northeastern
            University. I have interests in Software Engineering, Web
            Developement and UI/UX Design.
          </h5>
          <h5 className="aboutme-text">
            As an interdiciplinary student who studied computer science and
            design, I am able to leverage both logical and creative approaches
            when solving problems. I strive to create clean and cleverly
            designed code as well as visually appealing interfaces and designs.
          </h5>
          <h5 className="aboutme-text">
            Though my distinct experiences, I have carfeully honed my skills,
            allowing me to effectively communicate and flourish in all kinds of
            environments, making me a great team player. I am adaptable,
            determined, and always excited to learn!
          </h5>
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

