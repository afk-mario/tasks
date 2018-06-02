import React from 'react';
import './style.css';

const Duplicate = ({ onClick, id, name }) => {
  return (
    <div
      className="duplicate"
      onClick={e => {
        onClick(id, name);
      }}
    >
      <i>D</i>
    </div>
  );
};

export default Duplicate;
