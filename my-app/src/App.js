import React from 'react';
import ProjectCard from './components/ProjectCard.js';
import SkillsGrid from './components/SkillsGrid';
import './App.css'; 

const projects = [
  {
    title: "Valorant ML",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "ML.png",
    liveLink: "https://valorantpredict.streamlit.app/",
    githubLink: "https://github.com/wyattcasss/ValorantML"
  },
  {
    title: "Virtual Pet Game",
    description: "A project built using React, Node.js, and MongoDB.",
    tech: ["Python", "Data Sets"],
    image: "VG.png",
    liveLink: "https://youtu.be/d1L8Dd68ME8",
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
    liveLink: "https://valorantpredict.streamlit.app/",
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
        <p className="Paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...

        </p>

        <button className="GITHUBBUTTON" onClick={() => window.open("https://github.com/wyattcasss", "_blank")}>
          GitHub
        </button>
        <button className="linkin" onClick={() => window.open("//www.linkedin.com/in/wyatt-cassiotis-ba1b3b376/", "_blank")}>
          LinkedIn
        </button>
        <button className="linkin" onClick={() => window.open("mailto:wyatt.cassiotis@gmail.com", "_blank")}>
          Email
        </button>
        <button className="linkin" onClick={() => window.open("https://example.com/live", "_blank")}>
          Resume
        </button>

        <div className="project-heading">PROJECTS</div>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <SkillsGrid />
      </div>
    </div>
  );
}

export default App;
