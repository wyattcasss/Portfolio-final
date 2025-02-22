import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, image, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      {image && <img src={image} alt={`${title} screenshot`} className="project-card-image" />}
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card-tech">
          {tech.map((techName, index) => (
            <span key={index} className="tech-badge">
              {techName}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
