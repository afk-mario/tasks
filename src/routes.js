import React from 'react';
import { Redirect } from 'react-router-dom';

import Tasks from './containers/tasks';
import AddTasks from './containers/tasks/add';
import EditTasks from './containers/tasks/edit';
import Charts from './containers/charts';

import Settings from './containers/settings';

// List of routes
const routes = [
  {
    path: '/',
    component: () => <Redirect from="/" to="/tasks" />,
    exact: true,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    exact: true,
  },
  {
    path: '/tasks/add',
    component: AddTasks,
    exact: true,
  },
  {
    path: '/tasks/edit/:pk',
    component: EditTasks,
    exact: true,
  },
  {
    path: '/charts',
    name: 'Charts',
    exact: true,
    component: Charts,
  },
  {
    path: '/settings',
    name: 'Settings',
    exact: true,
    component: Settings,
  },
];

export default routes;
