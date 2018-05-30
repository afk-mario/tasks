import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../components/actions';
import { withRouter } from 'react-router';
import { clearTasks } from './actions';

function mapStateToProps(state) {
  const { tasks } = state;
  return { items: tasks };
}

const TaskActions = ({ items, dispatch, history }) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/tasks/add');
      },
    },
    {
      name: 'Load',
      onClick: () => {
        history.push('/tasks/load');
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearTasks());
      },
    },
  ];
  return <Actions items={tasks} />;
};

export default withRouter(connect(mapStateToProps)(TaskActions));
