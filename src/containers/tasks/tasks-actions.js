import React from 'react';
import { connect } from 'react-redux';

import { GenRandomTask } from '../../lib/random-tasks';
import Actions from '../../components/actions';
import { withRouter } from 'react-router';
import { clearTasks, addTask } from './actions';

function mapStateToProps(state) {
  const { tasks } = state;
  return { items: tasks };
}

const TaskActions = ({ items, dispatch, history }) => {
  const tasks = [
    {
      name: 'New task',
      onClick: () => {
        history.push('/tasks/add');
      },
    },
    {
      name: 'Gen Random',
      onClick: () => {
        for (let i = 0; i < 50; i++) dispatch(addTask(GenRandomTask()));
      },
    },
    {
      name: 'Clear tasks',
      onClick: () => {
        dispatch(clearTasks());
      },
    },
  ];
  return <Actions items={tasks} />;
};

export default withRouter(connect(mapStateToProps)(TaskActions));
