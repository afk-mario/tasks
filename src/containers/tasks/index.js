import React from 'react';
import { NavLink } from 'react-router-dom';

import List from './list';
import './style.css';

export default ({ routes }) => (
  <section className="tasks wrapper">
    <div className="add-task">
      <NavLink to="/tasks/add">+ Task</NavLink>
    </div>
    <List />
  </section>
);
