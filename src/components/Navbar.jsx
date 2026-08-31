import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

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
          onClick={closeMenu}
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
        <div className="collapse navbar-collapse py-3 py-lg-0" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center align-items-lg-center text-center text-lg-start gap-2 gap-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
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
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
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
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
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
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
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
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
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
                className="nav-link px-3"
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                className="btn btn-outline-info w-100 w-lg-auto"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <i className="bi bi-moon-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill"></i>
                )}
              </button>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info fw-semibold w-100 w-lg-auto"
                onClick={closeMenu}
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
