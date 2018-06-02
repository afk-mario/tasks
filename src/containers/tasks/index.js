import React from 'react';

import List from './list';
import Actions from './tasks-actions';
import './style.css';

export default ({ routes }) => (
  <section className="tasks wrapper">
    <Actions />
    <List />
  </section>
);
