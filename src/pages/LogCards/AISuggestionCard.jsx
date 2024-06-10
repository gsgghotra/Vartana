// AISuggestionCard.jsx
import React from 'react';
import './cardStyles.css';

const AISuggestionCard = ({ suggestion }) => {
  return (
    <div className="er-card ms-3" style={{ position: 'relative'}}>
      <div>
        <div className="er-card-title ai-suggestion-card">AI Suggestion</div>
        <div className='er-body'>Error: {suggestion}</div>
        <button className="round-button" style={{position:'absolute',right:'10px', top:'45px'}}>→</button>
      </div>
    </div>
  );
};

export default AISuggestionCard;
