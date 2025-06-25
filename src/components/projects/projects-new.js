import React, { useEffect, useState, useRef } from 'react';
import { CSProjects, DesignProjects } from './projects-data.js';
import './projects.css';

const Projects = () => {
  const [curProjects, setCurProjects] = useState(CSProjects);
  const projectRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('project-info-animation');
          return;
        }

        entry.target.classList.remove('project-info-animation');
      });
    });

    const projectsShade = document.querySelectorAll('.project-shade');

    projectsShade.forEach((element) => observer.observe(element));
  }, [curProjects]);

  const changeProjects = (newProjects) => {
    setCurProjects(newProjects);
    setTimeout(() => {
      projectRefs.current.forEach((el) => {
        if (el) {
          el.classList.remove('project-card-pop');
          setTimeout(() => {
            el.classList.add('project-card-pop');
          }, 10);
        }
      }, 10);
    });
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-div d-flex flex-column align-items-start">
        <div className="d-flex header-wrapper">
          <h3 className="sub-text section-header"> Projects </h3>
          <div className="d-flex select projejct-select">
            <li
              className={`${
                curProjects === CSProjects ? 'list-item-active' : 'list-item'
              }`}
              type="button"
              onClick={() => changeProjects(CSProjects)}
            >
              <h5>Programming</h5>
            </li>
            <li
              className={`${
                curProjects === DesignProjects
                  ? 'list-item-active'
                  : 'list-item'
              }`}
              type="button"
              onClick={() => changeProjects(DesignProjects)}
            >
              <h5>Design</h5>
            </li>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100 justify-content-xl-between justify-content-around">
          {curProjects.map((project, index) => (
            <div className="d-flex project-item">
              <div
                className="project-card"
                ref={(el) => (projectRefs.current[index] = el)}
                key={project.name}
                style={{ backgroundImage: `url(${project.hero})` }}
              >
                <div className="project-shade">
                  <div className="project-info">
                    <h5 className="project-name">{project.name}</h5>
                    <p className="project-desc">{project.desc}</p>
                    <div className="d-flex flex-wrap tech-tag-wrapper">
                      {project.tech.map((tech) => (
                        <span className="tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-highlight" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
