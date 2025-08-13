import React from 'react';
import ProjectCard from './components/ProjectCard.js';
import SkillsGrid from './components/SkillsGrid';
import EducationCard from './components/EducationCard';
import './App.css';

function App() {
  const projects = [
    {
      title: "Valorant ML",
      description: "A project built using scikit-learn, RandomForest",
      tech: ["RandomForest", "Data Sets"],
      image: "ML.png",
      liveLink: "https://valorantpredict.streamlit.app/",
      githubLink: "https://github.com/wyattcasss/ValorantML"
    },
    {
      title: "Virtual Pet Game",
      description: "A project built using React, Node.js, and MongoDB.",
      tech: ["Java", "Team Leadership","OOD"],
      image: "VG.png",
      liveLink: "https://youtu.be/d1L8Dd68ME8",
      githubLink: "https://github.com/wyattcasss/ValorantML"
    }
    //title: "Valorant ML",
    //  description: "A project built using React, Node.js, and MongoDB.",
    //  tech: ["Python", "Data Sets"],
    //  image: "https://via.placeholder.com/300",
    //  liveLink: "https://example.com/live",
    //  githubLink: "https://github.com/wyattcasss/ValorantML"
    //},
    //{
    //  title: "Valorant ML",
    //description: "A project built using React, Node.js, and MongoDB.",
    //  tech: ["Python", "Data Sets"],
    //  image: "https://via.placeholder.com/300",
    //  liveLink: "https://example.com/live",
    //  githubLink: "https://github.com/wyattcasss/ValorantML"
    //},
    //{
    //  title: "Valorant ML",
    //  description: "A project built using React, Node.js, and MongoDB.",
    //  tech: ["Python", "Data Sets"],
    //  image: "https://via.placeholder.com/300",
    //  liveLink: "https://valorantpredict.streamlit.app/",
    //  githubLink: "https://github.com/wyattcasss/ValorantML"
    //},
    //{
    //  title: "Valorant ML",
    //  description: "A project built using React, Node.js, and MongoDB.",
    //tech: ["Python", "Data Sets"],
    //  image: "https://via.placeholder.com/300",
    //  liveLink: "https://example.com/live",
    // githubLink: "https://github.com/wyattcasss/ValorantML"
    //}
      
    
  ];

  // Education and Certifications data

  // Education and Certifications data
// Education and Certifications data
  const educationData = [
    {
      logo: "logo.png", // Replace with actual Western University logo
      degree: "Honours Computer Science with a minor in Software Engineering",
      institution: "Western University",
      timeframe: "2023-2027",
      type: "education",
      institutionColor: "mediumpurple" // Custom color for this institution
    },
    {
      logo: "meta.png", // Replace with your second education logo
      degree: "Meta React Specialization",
      institution: "Meta",
      timeframe: "2025",
      type: "education",
      institutionColor: "cornFlowerBlue" // Custom green color
    },
    {
      
      logo: "aws.png", // Replace with your third education logo
      degree: "AWS Cloud Solutions Architect Specialization",
      institution: "Amazon Web Services",
      timeframe: "2025",
      type: "education",
      institutionColor: "#f59e0b" // Custom orange color
    }
  ];


  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="project-heading">Hey, I'm Wyatt Cassiotis 👋🏻</div>
        <div className="sub-heading">📍Toronto, Canada 🇨🇦</div>
        <p className="Paragraph">
          I'm a ambitious full-stack and front-end developer passionate about building dynamic, user-focused web applications using modern technologies like React, TypeScript, and Node.js. I combine strong architectural thinking in cloud solutions (AWS, Serverless) with a keen eye for responsive design and scalable data systems to deliver robust, full-cycle software solutions. With a foundation in agile practices, testing, and even machine learning, I’m driven to continuously expand my impact across both frontend innovation and full-stack engineering.
    
        </p>

        {/* Social Links */}
        <div className="social-links" style={{ marginBottom: '40px' }}>
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
        </div>

        {/* Education Section */}
        <div className="education-section">
          <div className="education-heading">EDUCATION</div>
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>

  

        {/* Projects Section */}
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