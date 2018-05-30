import React from 'react';

import Tasks from './containers/tasks';
import AddTasks from './containers/tasks/add';
import EditTasks from './containers/tasks/edit';
import SaveTasks from './containers/tasks/save';
import LoadTasks from './containers/tasks/load';

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
    name: 'tasks',
    component: Tasks,
    routes: [
      {
        path: '/tasks/add',
        component: AddTasks,
        exact: true,
      },
      {
        path: '/tasks/load',
        component: LoadTasks,
        exact: true,
      },
      {
        path: '/tasks/edit/:pk',
        component: EditTasks,
        exact: true,
      },
      {
        path: '/tasks/save/:pk',
        component: SaveTasks,
        exact: true,
      },
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    exact: true,
    component: Settings,
  },
];

export default routes;
