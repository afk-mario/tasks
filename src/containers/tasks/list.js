import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import List from '../../components/reordable-list';
import { editTask, deleteTask, moveTask } from './actions';
import { startTimer, clearTimer } from '../timer/actions';
import { truncate } from '../../lib/utils';
import { getPorcentage, filterTasks } from './utils';

const mapStateToProps = state => {
  const { tasks, timer, filter } = state || [];
  const filteredItems = filterTasks(tasks, filter, timer.pk);

  const items = filteredItems.map(item => ({
    id: item.pk,
    text: truncate(item.name, 20),
    porcentage: getPorcentage(item),
  }));

  return {
    items,
    tasks,
    timer,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { tasks, timer } = stateProps || {};
  const timerPk = timer.pk || undefined;

  return {
    ...stateProps,
    ...ownProps,
    onClick: pk => {
      dispatch(push(`/tasks/edit/${pk}`));
    },
    onDelete: pk => {
      if (pk === timerPk) dispatch(clearTimer());
      dispatch(deleteTask(pk));
    },
    onStart: (pk, index) => {
      const task = tasks.find(item => item.pk === pk);
      if (!task) return;
      const elapsed = task.timeDone * 1000;
      dispatch(moveTask(index, 0));
      dispatch(editTask({ ...task, status: 'STR' }));
      dispatch(startTimer(elapsed, pk));
    },
    onDone: pk => {
      const task = tasks.find(item => item.pk === pk);
      if (!task) return;
      dispatch(
        editTask({ ...task, status: 'CMP', timeDone: task.duration * 60 }),
      );
    },
    onRestart: pk => {
      const task = tasks.find(item => item.pk === pk);
      if (!task) return;
      dispatch(editTask({ ...task, status: 'IDL', timeDone: 0 }));
    },
    moveRow: (dragIndex, hoverIndex) => {
      dispatch(moveTask(dragIndex, hoverIndex));
    },
  };
};

const TaskList = connect(
  mapStateToProps,
  null,
  mergeProps,
)(List);

export default TaskList;
