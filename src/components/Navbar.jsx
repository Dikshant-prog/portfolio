import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
    >
      <div className="container">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-brand fw-bold fs-3 text-info"
          style={{ cursor: "pointer" }}
        >
          Dikshant
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Education
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-info" onClick={toggleTheme}>
                {theme === "light" ? (
                  <i className="bi bi-moon-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill"></i>
                )}
              </button>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info fw-semibold"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
