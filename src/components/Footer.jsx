import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`py-3 ${
        theme === "dark"
          ? "bg-dark text-light"
          : "bg-light text-dark border-top"
      }`}
    >
      <div className="container">
        <div className="row g-4 gy-lg-3">
          {/* About */}

          <div className="col-12 col-md-4 col-lg-4">
            <h3 className="fw-bold text-info mb-2">Dikshant</h3>

            <p
              className={`mt-3 mb-0 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              MERN Stack Developer passionate about building modern, responsive
              and scalable web applications using React, Node.js, Express.js and
              MongoDB.
            </p>
          </div>

          {/* Quick Links */}

          <div className="col-12 col-md-4 col-lg-4">
            <h4 className="fw-bold mb-2">Quick Links</h4>

            <div className="d-flex flex-column gap-2">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`text-decoration-none ${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`text-decoration-none ${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={`text-decoration-none ${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
              >
                Skills
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`text-decoration-none ${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`text-decoration-none ${
                  theme === "dark" ? "text-light" : "text-secondary"
                }`}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}

          <div className="col-12 col-md-4 col-lg-4">
            <h4 className="fw-bold mb-3">Connect With Me</h4>

            <div className="d-flex gap-3">
              <a
                href="https://github.com/Dikshant-prog"
                target="_blank"
                rel="noreferrer"
                className={`btn ${
                  theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
                }`}
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/dikshant-4a4215299/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:dikshant8650@gmail.com"
                className="btn btn-outline-danger"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>

            <div className="mt-3">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="btn btn-info"
              >
                <i className="bi bi-arrow-up-circle me-2"></i>
                Back To Top
              </Link>
            </div>
          </div>
        </div>

        <hr
          className={`my-3 ${
            theme === "dark" ? "border-secondary" : "border-dark"
          }`}
        />

        <div className="text-center">
          <p
            className={`mb-0 ${
              theme === "dark" ? "text-light" : "text-secondary"
            }`}
          >
            © {new Date().getFullYear()} Dikshant | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
