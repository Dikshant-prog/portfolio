import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/resume.pdf";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="home">
      <section
        className={`min-vh-100 d-flex align-items-center py-5 py-lg-0 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
      >
        <div className="container">
          <div className="row align-items-center gy-4 gy-lg-5">
            {/* Left Side */}
            <div className="col-lg-6 text-center text-lg-start">
              <p className="text-info fs-5 fw-semibold mb-2">👋 Hello, I'm</p>

              <h1 className="display-4 display-md-3 fw-bold">Dikshant</h1>

              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="fs-2 fs-md-1 fw-bold text-info d-block mt-2"
              />

              <p
                className={`lead ${
                  theme === "dark" ? "text-light" : "text-secondary"
                } mt-3`}
              >
                Passionate MERN Stack Developer with knowledge of React.js,
                Node.js, Express.js and MongoDB. I love building responsive,
                modern and user-friendly web applications.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
                <a
                  href={resume}
                  download="Dikshant_Resume.pdf"
                  className="btn btn-info btn-lg fw-semibold"
                >
                  <i className="bi bi-download me-2"></i>
                  Download Resume
                </a>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`btn btn-lg ${
                    theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Side */}

            <motion.div
              className="col-lg-6 text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={profile}
                alt="Profile"
                className="img-fluid rounded-circle border border-5 border-info shadow"
                style={{
                  maxWidth: "350px",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
