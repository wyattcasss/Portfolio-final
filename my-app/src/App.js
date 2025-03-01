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
        <p className = "Paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

       
        <button className="GITHUBBUTTON" onClick={() => window.open("https://github.com/wyattcasss", "_blank")}>
          GitHub
        </button>

        <button className="linkin" onClick={() => window.open("https://example.com/live", "_blank")}>
          LinkedIn
        </button>
        <button className="linkin" onClick={() => window.open("mailto:Wyatt.cassiotis@gmail.com", "_blank")}>
          Email
        </button>
        <button className="linkin" onClick={() => window.open("ttps://example.com/live", "_blank")}>
          Resume
        </button>
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
