import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { GenRandomTask } from '../../lib/random-tasks';
import Actions from '../../components/actions';
import { clearTasks, addTask } from './actions';
import { clearTimer } from '../timer/actions';

function mapStateToProps(state) {
  const { tasks } = state;
  return { items: tasks };
}

const TaskActions = ({ dispatch }) => {
  const tasks = [
    {
      name: 'New task',
      onClick: () => {
        dispatch(push('/tasks/add'));
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
        dispatch(clearTimer());
      },
    },
  ];
  return <Actions items={tasks} />;
};

export default connect(mapStateToProps)(TaskActions);
