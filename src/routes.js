import React from 'react';

import Tasks from './containers/tasks';
import AddTasks from './containers/tasks/add';
import EditTasks from './containers/tasks/edit';
import NotFound from './components/404';

import Settings from './containers/settings';
import { Redirect } from 'react-router-dom';

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
    path: '/analytics',
    name: 'Analytics',
    exact: true,
    component: NotFound,
  },
  {
    path: '/settings',
    name: 'Settings',
    exact: true,
    component: Settings,
  },
];

export default routes;
