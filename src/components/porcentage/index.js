import React from 'react';
import './style.css';

const Porcentage = ({ porcentage }) => {
  const style = {
    width: `${porcentage}%`,
  };
  return <div className="porcentage" style={style} />;
};

export default Porcentage;
