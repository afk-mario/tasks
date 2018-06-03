import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import List from '../../components/reordable-list';
import { deleteTask, moveTask } from './actions';
import { startTimer, clearTimer } from '../timer/actions';
import { truncate, twoDecimals } from '../../lib/utils';

import {
  FILTER_NONE,
  FILTER_SHORT,
  FILTER_MEDIUM,
  FILTER_LONG,
  FILTER_COMPLETE,
} from '../filter/filters';

const formatText = task => {
  const minutes = task.timeDone / 60;
  const porcentage = twoDecimals((minutes * 100) / task.duration);
  const text = `${task.name} - ${porcentage}%`;
  return text;
};

const filterTasks = (tasks, filter) => {
  switch (filter.value) {
    case FILTER_NONE:
      return tasks.filter(item => item.status !== 'CMP');
    case FILTER_SHORT:
      console.log('short');
      return tasks.filter(item => item.duration <= 30);
    case FILTER_MEDIUM:
      return tasks.filter(item => item.duration <= 45);
    case FILTER_LONG:
      return tasks.filter(item => item.duration > 45);
    case FILTER_COMPLETE:
      return tasks.filter(item => item.status === 'CMP');
    default:
      break;
  }
};

const mapStateToProps = state => {
  const { tasks, timer, filter } = state || [];
  const filteredItems = filterTasks(tasks, filter);

  const items = filteredItems.map(item => ({
    id: item.pk,
    text: formatText(item),
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
  const timerTask = timer.task || {};
  const timerPk = timerTask.pk || undefined;

  return {
    ...stateProps,
    ...ownProps,
    onClick: pk => {
      dispatch(push(`/tasks/edit/${pk}`));
    },
    onDelete: (pk, name) => {
      if (pk === timerPk) dispatch(clearTimer());
      dispatch(deleteTask(pk));
    },
    onStart: pk => {
      const task = tasks.find(item => item.pk === pk);
      if (!task) return;
      const elapsed = task.timeDone * 1000;
      dispatch(startTimer(elapsed, pk));
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
