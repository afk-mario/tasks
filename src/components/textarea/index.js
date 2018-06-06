import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

// Generic Text Area with label
const TextArea = props => {
  const { id, name, label, type } = props;

  const className = classNames({
    [`text-area-${type}`]: true,
    input: true,
  });

  const selector = id || name;

  return (
    <div className={className}>
      <label htmlFor={selector}>{label ? label : name}</label>
      <textarea id={selector} name={name} {...props} />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default TextArea;
