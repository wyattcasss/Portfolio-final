import React from 'react';
import './EducationCard.css';

const EducationCard = ({ 
  logo, 
  degree, 
  institution, 
  timeframe,
  institutionColor = "mediumpurple" // Default color if none provided
}) => {
  return (
    <div className="education-card">
      <div className="education-logo-container">
        <img 
          src={logo} 
          alt={`${institution} logo`} 
          className="education-logo"
        />
      </div>
      <div className="education-info">
        <h3 className="education-degree">{degree}</h3>
        <p 
          className="education-institution"
          style={{ color: institutionColor }}
        >
          {institution}
        </p>
        <p className="education-timeframe">{timeframe}</p>
      </div>
    </div>
  );
};

export default EducationCard;