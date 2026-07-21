import React, { useContext } from "react";
import { Element } from "react-scroll";
import projects from "../data/projects";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="projects">
      <section
        className={`py-5 ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-body-secondary text-dark"
        }`}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Featured Projects</h2>

            <p
              className={`fs-5 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              Some of my recent development work.
            </p>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div
                className="col-md-6 col-xl-6"
                key={project.id}
                data-aos="fade-up"
              >
                <div
                  className={`card h-100 shadow ${
                    theme === "dark"
                      ? "bg-dark text-white border-secondary"
                      : "bg-white text-dark"
                  }`}
                  data-aos="zoom-in"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top img-fluid"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h3 className="card-title fw-bold">{project.title}</h3>

                    <p
                      className={`card-text ${
                        theme === "dark" ? "text-light" : "text-secondary"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge text-bg-info me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`card-footer border-0 pb-4 ${
                      theme === "dark" ? "bg-dark" : "bg-white"
                    }`}
                  >
                    <div className="d-flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn w-50 ${
                          theme === "dark" ? "btn-outline-light" : "btn-dark"
                        }`}
                      >
                        <i className="bi bi-github me-2"></i>
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-info w-50"
                      >
                        <i className="bi bi-box-arrow-up-right me-2"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
