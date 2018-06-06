import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import './style.css';

// Generic Component for dropping files
const Load = ({ name, onLoad }) => (
  <section className="container load">
    <Dropzone
      name="elements"
      className="drop"
      activeClassName="active-drop"
      acceptClassName="accept-drop"
      rejectClassName="reject-drop"
      disabledClassName="disabled-drop"
      onDrop={onLoad}
    >
      {name}
    </Dropzone>
  </section>
);

Load.propTypes = {
  name: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default Load;
