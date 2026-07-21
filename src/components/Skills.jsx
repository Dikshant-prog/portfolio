import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Element } from "react-scroll";
import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Element name="skills">
      <section
        className={`py-5 ${
          theme === "dark" ? "bg-black text-white" : "bg-light text-dark"
        }`}
      >
        <div className="container">
          {/* Heading */}

          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">My Skills</h2>

            <p
              className={`fs-5 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              Technologies and tools I use for web development.
            </p>
          </div>

          {/* Skills */}

          <div className="row g-4">
            {skills.map((item) => (
              <motion.div
                key={item.id}
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={`card h-100 shadow ${
                    theme === "dark"
                      ? "bg-dark text-white border-secondary"
                      : "bg-white text-dark"
                  }`}
                  whileHover={{
                    y: -10,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="card-body text-center">
                    <motion.i
                      className={`${item.icon} display-3 text-info`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                    ></motion.i>

                    <h4 className="mt-3 fw-bold">{item.title}</h4>

                    <p
                      className={`${
                        theme === "dark" ? "text-light" : "text-secondary"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
