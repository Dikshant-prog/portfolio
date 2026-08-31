import React from "react";
import { Element } from "react-scroll";
import profile from "../assets/images/profile.png";
import resume from '../assets/resume/resume.pdf'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="about">
      <section
        className={`py-5 ${theme === "dark" ? "bg-black text-white" : "bg-light text-dark"}`}
      >
        <div className="container">
          {/* Heading */}

          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">About Me</h2>

            <p
              className={`fs-5 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              Get to know me better.
            </p>
          </div>

          <div className="row align-items-center g-4 g-lg-5" data-aos="fade-up">
            {/* Left Side */}

            <div className="col-lg-5 text-center">
              <img
                src={profile}
                alt="About"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: "380px", width: "100%", height: "auto" }}
              />
            </div>

            {/* Right Side */}

            <div className="col-lg-7 text-center text-lg-start">
              <h3 className="fw-bold mb-3">Hi, I'm Dikshant</h3>

              <h5 className="text-info mb-4">MERN Stack Developer</h5>

              <p
                className={`${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
              >
                I am a passionate MERN Stack Developer who enjoys building
                modern, responsive and user-friendly web applications using
                React.js, Node.js, Express.js and MongoDB.
              </p>

              <p
                className={`${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
              >
                I enjoy solving real-world problems, learning new technologies
                and creating clean, responsive and scalable web applications.
              </p>

              {/* Personal Information */}

              <div className="row mt-4 gy-3 text-start">
                <div className="col-md-6">
                  <div
                    className={`card h-100 ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
                  >
                    <div className="card-body">
                      <p>
                        <i className="bi bi-person-fill text-info me-2"></i>
                        <strong>Name:</strong> Dikshant
                      </p>

                      <p>
                        <i className="bi bi-mortarboard-fill text-info me-2"></i>
                        <strong>Qualification:</strong> MCA
                      </p>

                      <p className="mb-0">
                        <i className="bi bi-briefcase-fill text-info me-2"></i>
                        <strong>Experience:</strong> Fresher
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className={`card h-100 ${theme === "dark" ? "bg-dark text-white border-secondary" : "bg-white text-dark"}`}
                  >
                    <div className="card-body">
                      <p className="text-break">
                        <i className="bi bi-envelope-fill text-info me-2"></i>
                        <strong>Email:</strong>
                        <br />
                        dikshant8650@gmail.com
                      </p>

                      <p>
                        <i className="bi bi-geo-alt-fill text-info me-2"></i>
                        <strong>Location:</strong>
                        <br />
                        Noida, Uttar Pradesh, India
                      </p>

                      <p className="mb-0">
                        <i className="bi bi-code-slash text-info me-2"></i>
                        <strong>Role:</strong> MERN Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Button */}

              <div className="mt-4 d-flex justify-content-center justify-content-lg-start">
                <a
                  href={resume}
                  download="Dikshant_Resume.pdf"
                  className="btn btn-info btn-lg fw-semibold"
                >
                  <i className="bi bi-download me-2"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
