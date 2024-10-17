import React, { useState } from "react";
import { CompanyData } from "./companyData";
import { ExperienceDescription } from "./experienceDescription";
import resume from "../..//assets/Jonathan Shih's resume.pdf";
const Experiences = () => {
  const [active, setActive] = useState(CompanyData[0].name);
  return (
    <div className="experiences-wrapper align-items-start d-flex flex-column">
      <h3 className="sub-text section-header"> Professional Experiences </h3>

      {ExperienceDescription.map((description, i) => (
        <div className="row w-100">
          <div className="col-2 text-end">
            <h5>{description.date}</h5>
          </div>
          <div
            className={`${
              i < ExperienceDescription.length - 1 && "pb-2"
            } col-10 experiences-div`}
          >
            <div>
              <div className="d-md-flex">
                <h5 className="green">{description.role}</h5>
                <h5 className="spacer d-none d-md-block ps-1 pe-1"> | </h5>
                <h5 className="fullname">{description.fullName}</h5>
              </div>
              <ul>
                <li>
                  <h5>{description.desc}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <div className="topbar d-flex flex-end w-100 justify-content-end pt-3">
        <a className="nav-link" href={resume} target="_blank">
          <h5>View full resume</h5>
        </a>
      </div>
    </div>
  );
};

export default Experiences;
