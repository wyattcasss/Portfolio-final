import React from 'react';

const SkillsGrid = () => {
  const skills = [
    {
      name: 'TypeScript',
      iconUrl: '/icons/typescript.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #64748b 20%, #031b3cff 100%)'
      }
    },
    {
      name: 'React',
      iconUrl: '/icons/react.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #031b3cff  20%, #7c3aed 100%)'
      }
    },
    {
      name: 'Next.js',
      iconUrl: '/icons/nextjs.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #7c3aed 20%, #64748b 100%)'
      }
    },
    {
      name: 'Tailwind',
      iconUrl: '/icons/tailwind.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #64748b 20%, #2563eb 100%)'
      }
    },
    {
      name: 'Git',
      iconUrl: '/icons/git.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #2563eb 20%, #031b3cff 100%)'
      }
    },
    {
      name: 'Node.js',
      iconUrl: '/icons/nodejs.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #031b3cff 20%, #64748b 100%)'
      }
    },
    {
      name: 'Express',
      iconUrl: '/icons/express.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #64748b 20%, #2563eb 100%)'
      }
    },
    {
      name: 'MongoDB',
      iconUrl: '/icons/mongodb.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
      }
    },
    {
      name: 'PostgreSQL',
      iconUrl: '/icons/postgresql.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 100%)'
      }
    },
    {
      name: 'Supabase',
      iconUrl: '/icons/supabase.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #64748b 0%, #2563eb 100%)'
      }
    },
    {
      name: 'Firebase',
      iconUrl: '/icons/firebase.png',
      gradientStyle: {
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
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