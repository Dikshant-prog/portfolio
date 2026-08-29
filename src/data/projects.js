import erp from "../assets/images/erp.png";
import weather from "../assets/images/weather.png";
import lettergenerator from "../assets/images/lettergenerator.png";
import portfolio from "../assets/images/portfolio.png";

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
    image: lettergenerator,
    title: "Letter Generator",
    description:
      "A letter generatior Website, where user enter details and generate Internship Letter, Offer Letter, Joining Letter, Certificate Letter.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "#",
    live: "https://lettergeneratorweb.netlify.app/",
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
