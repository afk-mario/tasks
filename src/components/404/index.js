import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
/**
 * Component for error 404
 * @param  {string} {location} path that raises the error
 */
const NoMatch = ({ location }) => (
  <section className="error wrapper">
    <h1>not found</h1>
    <code>{location.pathname}</code>
  </section>
);

NoMatch.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NoMatch;
