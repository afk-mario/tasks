import React from 'react';
import classNames from 'classnames';

import './style.css';
/**
 * Generic action button component
 * @param  {} {onClick
 * @param  {} id
 * @param  {} name
 * @param  {} children
 * @param  {} className}
 */
const ActionButton = ({ onClick, id, name, children, className }) => {
  const classN = classNames({
    [className]: true,
    'action-button': true,
  });

  return (
    <div
      className={classN}
      onClick={e => {
        onClick(id, name);
      }}
    >
      {children}
    </div>
  );
};

export default ActionButton;
