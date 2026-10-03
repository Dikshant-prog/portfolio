import erp from "../assets/images/erp.png";
import weather from "../assets/images/weather.png";
import portfolio from "../assets/images/portfolio.png";
import lms from "../assets/images/lms.jpeg"

const projects = [
  {
    id: 1,
    image: erp,
    title: "Student ERP Portal",
    description:
      "A complete Student ERP system with student management, authentication and admin panel.",
    technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "https://frontend-spw4.onrender.com/",
  },

  {
    id: 2,
    image: lms,
    title: "Learning Website (Skill Up)",
    description:
      "SkillUp is an online learning website where users can explore courses and learn skills like HTML, CSS, JavaScript, React, jQuery, and Bootstrap.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "#",
    live: "https://lms-aa60.onrender.com/",
  },

  {
    id: 3,
    image: weather,
    title: "Weather App",
    description:
      "Weather application using OpenWeather API with live city search.",
    technologies: ["React", "Bootstrap", "API"],
    github: "#",
    live: "https://weatherapp-zeta-lilac.vercel.app/",
  },

  {
    id: 4,
    image: portfolio,
    title: "Personal Portfolio",
    description: "Responsive React Portfolio developed using Bootstrap.",
    technologies: ["React", "Bootstrap"],
    github: "#",
    live: "https://portfolio-jm1k.onrender.com/",
  },
];

export default projects;
