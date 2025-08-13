import React from 'react';

const SkillsGrid = () => {
const skills = [
  // === Cloud & Serverless ===
  {
    name: 'AWS',
    iconUrl: '/icons/aws.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #FF9900 20%, #232F3E 100%)'
    }
  },
  {
    name: 'DynamoDB',
    iconUrl: '/icons/dynamodb.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #232F3E 20%, #FF9900 100%)'
    }
  },
  {
    name: 'Serverless',
    iconUrl: '/icons/serverless.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #FF9900 20%, #64748b 100%)'
    }
  },
  {
    name: 'Hybrid Cloud',
    iconUrl: '/icons/hybridcloud.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #232F3E 20%, #64748b 100%)'
    }
  },

  // === Architecture & Data ===
  {
    name: 'Solution Architecture',
    iconUrl: '/icons/architecture.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #581c87 20%, #232F3E 100%)'
    }
  },
  {
    name: 'Scalability',
    iconUrl: '/icons/scalability.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #2563eb 20%, #581c87 100%)'
    }
  },
  {
    name: 'Data Engineering',
    iconUrl: '/icons/dataeng.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #64748b 20%, #2563eb 100%)'
    }
  },
  {
    name: 'Data Management',
    iconUrl: '/icons/datamanage.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #2563eb 20%, #7c3aed 100%)'
    }
  },

  // === Development & Testing ===
  {
    name: 'Agile',
    iconUrl: '/icons/agile.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #031b3cff 20%, #64748b 100%)'
    }
  },
  {
    name: 'Sprints Planning',
    iconUrl: '/icons/sprint.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #64748b 20%, #031b3cff 100%)'
    }
  },
  {
    name: 'Jest',
    iconUrl: '/icons/jest.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #2563eb 20%, #64748b 100%)'
    }
  },
  {
    name: 'Unit Testing',
    iconUrl: '/icons/unittest.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #7c3aed 20%, #2563eb 100%)'
    }
  },

  // === Frontend & Design ===
  {
    name: 'React.js',
    iconUrl: '/icons/reactjs.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #031b3cff 20%, #7c3aed 100%)'
    }
  },
  {
    name: 'UI Components',
    iconUrl: '/icons/uicomponents.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #7c3aed 20%, #64748b 100%)'
    }
  },
  {
    name: 'Responsive Design',
    iconUrl: '/icons/responsive.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #64748b 20%, #2563eb 100%)'
    }
  },
  {
    name: 'CSS3 Animations',
    iconUrl: '/icons/cssanim.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #2563eb 20%, #581c87 100%)'
    }
  },

  // === Data Science & ML ===
  {
    name: 'Machine Learning',
    iconUrl: '/icons/ml.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #FF9900 20%, #581c87 100%)'
    }
  },
  {
    name: 'RandomForest',
    iconUrl: '/icons/randomforest.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #581c87 20%, #FF9900 100%)'
    }
  },
  {
    name: 'Scikit-learn',
    iconUrl: '/icons/scikitlearn.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #FF9900 20%, #232F3E 100%)'
    }
  },
  {
    name: 'Streamlit',
    iconUrl: '/icons/streamlit.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #232F3E 20%, #FF9900 100%)'
    }
  },

  // === Languages & Patterns ===
  {
    name: 'OOP',
    iconUrl: '/icons/oop.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #7c3aed 20%, #581c87 100%)'
    }
  },
  {
    name: 'Java',
    iconUrl: '/icons/java.png',
    gradientStyle: {
      background: 'linear-gradient(135deg, #64748b 20%, #031b3cff 100%)'
    }
  }
];

const containerStyle = {
  padding: '1rem',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
               "Helvetica Neue", Arial, sans-serif`,
  
};

  const gridStyle = {
    maxWidth: '55rem',
    margin: '0 auto'
  };

  const titleStyle = {

  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '1rem'
  };

  const cardStyle = {
    borderRadius: '0.5rem',
    padding: '0 rem',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const iconContainerStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyle = {
    width: '1.6rem',
    height: '1.6rem',
    objectFit: 'contain'
  };

  const fallbackStyle = {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'none'
  };

  const textStyle = {
    color: 'white',
    fontWeight: '500',
    fontSize: '0.8rem',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  };


  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        
        <div style={skillsGridStyle}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                ...skill.gradientStyle,
                ...(hoveredIndex === index ? cardHoverStyle : {})
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={contentStyle}>
                <div style={iconContainerStyle}>
                  <img 
                    src={skill.iconUrl} 
                    alt={`${skill.name} icon`}
                    style={iconStyle}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span style={fallbackStyle}>
                    {skill.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span style={textStyle}>
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
     
     
      </div>
    </div>
  );
};

export default SkillsGrid;