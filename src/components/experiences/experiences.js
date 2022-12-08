import React, { useState } from "react";
import { CompanyData } from "./companyData";
import { ExperienceDescription } from "./experienceDescription";

const Experiences = () => {
  const [active, setActive] = useState(CompanyData[0].name);
  return (
    <div className="experiences-wrapper align-items-start d-flex flex-column">
      <h3 className="sub-text section-header"> Professional Experiences </h3>
    <div className="experiences-div">
      <div className="select">
        {CompanyData.map((company) => (
          <li
            className={`${
              active === company.name
                ? "company-list-item-active"
                : "company-list-item"
            }`}
            type="button"
            onClick={() => {
              setActive(company.name);
            }}
          >
            <h4>{company.name}</h4>
          </li>
        ))}
      </div>
      <div className="description">
        {ExperienceDescription.map((description) => (
          <div className={`${active === description.name ? "" : "d-none"}`}>
            <div className="d-flex company-name">
              <h4 className="fullname">{description.fullName}</h4>
              <h4 className="spacer"></h4>
              <h4 className="green">{description.role}</h4>
            </div>
            <h5 className="sub-text">{description.date}</h5>
            <ul>
              {description.desc.map((desc) => (
                <li><h4>{desc}</h4></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Experiences;
