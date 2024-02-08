import React, { useState } from 'react';
import '../styles/accordeon.css'; // Assurez-vous d'avoir un fichier CSS pour les styles de l'accordéon

const Accordion = ({content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="accordion-header" onClick={handleToggleExpand}>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>&#9650;</span>
      </div>
      {isExpanded && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
