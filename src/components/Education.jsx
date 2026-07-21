import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="education">
      <section
        className={`py-5 ${
          theme === "dark" ? "bg-black text-white" : "bg-light text-dark"
        }`}
      >
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Education</h2>
            <p
              className={`fs-5 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              My academic journey.
            </p>
          </div>

          <div className="row g-4">
            {/* MCA */}
            <div className="col-md-6" data-aos="fade-right">
              <div
                className={`card h-100 shadow border-0 ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold">
                      <i className="bi bi-mortarboard-fill text-info me-2"></i>
                      Master of Computer Applications
                    </h4>

                    <span className="badge bg-info text-dark">2023 - 2025</span>
                  </div>

                  <hr className={theme === "dark" ? "border-secondary" : ""} />

                  <p className="mb-2">
                    <strong>University</strong>
                  </p>

                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-secondary"
                    }`}
                  >
                    Teerthanker Mahaveer University, Moradabad
                  </p>

                  <p>
                    Completed MCA with a focus on MERN Stack Development, Web
                    Technologies and Software Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Graduation */}
            <div className="col-md-6" data-aos="fade-right">
              <div
                className={`card h-100 shadow border-0 ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold">
                      <i className="bi bi-book-fill text-info me-2"></i>
                      Bachelor Degree
                    </h4>

                    <span className="badge bg-info text-dark">2020 - 2023</span>
                  </div>

                  <hr className={theme === "dark" ? "border-secondary" : ""} />

                  <p className="mb-2">
                    <strong>College</strong>
                  </p>

                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-secondary"
                    }`}
                  >
                    Jagdish Saran Hindu (PG) College, Amroha
                  </p>

                  <p>Completed graduation.</p>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="col-md-6" data-aos="fade-right">
              <div
                className={`card h-100 shadow border-0 ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold">
                      <i className="bi bi-journal-bookmark-fill text-info me-2"></i>
                      Higher Secondary (12th)
                    </h4>

                    <span className="badge bg-info text-dark">2020</span>
                  </div>

                  <hr className={theme === "dark" ? "border-secondary" : ""} />

                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-secondary"
                    }`}
                  >
                    Sarvodya Saraswati Academy, Amroha
                  </p>

                  <p>Completed Higher Secondary Education.</p>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="col-md-6" data-aos="fade-right">
              <div
                className={`card h-100 shadow border-0 ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold">
                      <i className="bi bi-pencil-square text-info me-2"></i>
                      Secondary (10th)
                    </h4>

                    <span className="badge bg-info text-dark">2018</span>
                  </div>

                  <hr className={theme === "dark" ? "border-secondary" : ""} />

                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-secondary"
                    }`}
                  >
                    SPS Inter College Jabdi, Amroha
                  </p>

                  <p>Completed Secondary Education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
