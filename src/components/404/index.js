import React from 'react';
import './style.css';

const NoMatch = ({ location }) => (
  <section className="error wrapper">
    <h1>not found</h1>
    <code>{location.pathname}</code>
  </section>
);

export default NoMatch;
