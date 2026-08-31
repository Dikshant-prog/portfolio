import React, { useRef, useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddrz9rg",
        "template_j6nmxcf",
        form.current,
        "jNvp1ubafZbqtWdcC",
      )

      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2500,
            theme: theme,
          });

          form.current.reset();
        },

        (error) => {
          toast.error("Failed to send message!", {
            position: "top-right",
            autoClose: 2500,
            theme: theme,
          });

          console.log(error);
        },
      );
  };

  return (
    <Element name="contact">
      <section
        className={`py-5 ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-body-secondary text-dark"
        }`}
      >
        <div className="container">
          {/* Heading */}

          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Contact Me</h2>

            <p
              className={`fs-5 ${
                theme === "dark" ? "text-light" : "text-secondary"
              }`}
            >
              Let's connect and build something amazing together.
            </p>
          </div>

          <div className="row g-5">
            {/* Left Side */}

            <div className="col-lg-5" data-aos="fade-right">
              <div
                className={`card shadow h-100 ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <h3 className="fw-bold mb-4">Get In Touch</h3>

                  <div className="mb-4">
                    <h5>
                      <i className="bi bi-envelope-fill text-info me-2"></i>
                      Email
                    </h5>

                    <p
                      className={`text-break ${
                        theme === "dark" ? "text-light" : "text-secondary"
                      }`}
                    >
                      dikshant8650@gmail.com
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5>
                      <i className="bi bi-telephone-fill text-info me-2"></i>
                      Phone
                    </h5>

                    <p
                      className={
                        theme === "dark" ? "text-light" : "text-secondary"
                      }
                    >
                      +91 8650531032
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5>
                      <i className="bi bi-geo-alt-fill text-info me-2"></i>
                      Noida, Uttar Pradesh
                    </h5>

                    <p
                      className={
                        theme === "dark" ? "text-light" : "text-secondary"
                      }
                    >
                      Uttar Pradesh, India
                    </p>
                  </div>

                  <div>
                    <h5 className="mb-3">Social Links</h5>

                    <div className="d-flex gap-3">
                      <a
                        href="https://github.com/Dikshant-prog"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-dark"
                      >
                        <FaGithub />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/dikshant-4a4215299/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        <FaLinkedin />
                      </a>

                      <a
                        href="mailto:dikshant8650@gmail.com"
                        className="btn btn-danger"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="col-lg-7" data-aos="fade-left">
              <div
                className={`card shadow ${
                  theme === "dark"
                    ? "bg-dark text-white border-secondary"
                    : "bg-white text-dark"
                }`}
              >
                <div className="card-body">
                  <h3 className="fw-bold mb-4">Send Message</h3>

                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>

                      <input
                        type="text"
                        name="name"
                        className={`form-control ${
                          theme === "dark"
                            ? "bg-dark text-white border-secondary"
                            : ""
                        }`}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>

                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          theme === "dark"
                            ? "bg-dark text-white border-secondary"
                            : ""
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>

                      <textarea
                        rows="5"
                        name="message"
                        className={`form-control ${
                          theme === "dark"
                            ? "bg-dark text-white border-secondary"
                            : ""
                        }`}
                        placeholder="Write your message..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-info w-100 fw-bold"
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
