import React from 'react';
import ProjectCard from './ProjectCard.js';
import './App.css';

const projects = [
  {
    title: "Valorant ML",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "unnamed (6).png",
    liveLink: "https://example.com/live",
    githubLink: "https://github.com/wyattcasss/ValorantML"
  },
  {
    title: "Valorant ML",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com/live",
    githubLink: "https://github.com/wyattcasss/ValorantML"
  },
  {
    title: "Valorant ML",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com/live",
    githubLink: "https://github.com/wyattcasss/ValorantML"
  },
  {
    title: "Valorant ML",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com/live",
    githubLink: "https://github.com/wyattcasss/ValorantML"
  }
];

function App() {


  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="project-heading">Hey, I'm Wyatt Cassiotis 👋🏻</div>
        <div className="sub-heading">📍Toronto, Canada 🇨🇦</div>
        {}

        <div className="project-heading">MY PROJECTS</div>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
