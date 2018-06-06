import React from 'react';

import List from './list';
import Actions from './tasks-actions';
import Timer from '../timer';
import Filter from '../filter';
import './style.css';

export default () => (
  <section className="tasks wrapper">
    <Timer />
    <Actions />
    <Filter />
    <List />
  </section>
);
