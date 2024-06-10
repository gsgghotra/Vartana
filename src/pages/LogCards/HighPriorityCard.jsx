// HighPriorityCard.jsx
import React from 'react';
import './cardStyles.css';

const HighPriorityCard = ({ line, file }) => {
  return (
    <div className="er-card">
      <div>
        <div className="er-card-title high-priority-card">High-Priority</div>
        <div className='er-body'>{`Line ${line} (${file})`}</div>
      </div>
    </div>
  );
};

export default HighPriorityCard;
