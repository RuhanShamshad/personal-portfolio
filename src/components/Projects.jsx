import React from "react";
import "../App.css"; // Make sure you have the updated CSS styles

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React.",
    github: "https://github.com/RuhanShamshad/personal-portfolio",
  },
  {
    title: "E-commerce App",
    description: "An online store with cart and payment features.",
    github: "https://github.com/RuhanShamshad/shopping-cart",
  },
  {
    title: "Expense Tracker App",
    description: "A platform which you have to calculate your expenses .",
    github: "https://github.com/RuhanShamshad/expenses-Tracker",
  },
  {
    title: "Weather App",
    description: "creating weather App using firebase with react js .",
    github: "https://github.com/RuhanShamshad/weather-App",
  },
  {
    title: "Chat App",
    description: "chating App using firebase with react  .",
    github: "https://github.com/RuhanShamshad/Chat-App",
  },
  {
    title: "Crud App",
    description: "performing crud operation using react js  .",
    github: "https://github.com/RuhanShamshad/crud-app",
  },
  // Add more if nedded
];

function Projects() {
  return (
    <div className="projects-scroll">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>
            {project.title}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              🔗
            </a>
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
