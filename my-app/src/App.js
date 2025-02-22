import React from 'react';
import ProjectCard from './ProjectCard.js';

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
  
];


function App() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl">
      <h1 className="text-3xl font-bold text-center my-8 text-white !important">My Projects</h1>
        {}
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;
