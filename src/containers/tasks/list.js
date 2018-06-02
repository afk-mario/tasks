import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import List from '../../components/reordable-list';
import { duplicateTask, deleteTask, moveTask } from './actions';
import { truncate } from '../../lib/utils';

const mapStateToProps = state => {
  const { tasks } = state || [];
  const items = tasks.map(item => ({
    id: item.pk,
    text: truncate(item.name, 20),
  }));
  return {
    items,
    tasks,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { tasks } = stateProps;

  return {
    ...stateProps,
    ...ownProps,
    onClick: pk => {
      ownProps.history.push(`/tasks/edit/${pk}`);
    },
    onDelete: (pk, name) => {
      dispatch(deleteTask(pk));
    },
    onDuplicate: pk => {
      const task = tasks.find(item => item.pk === pk);
      if (!task) return;
      dispatch(duplicateTask(task));
    },

    moveRow: (dragIndex, hoverIndex) => {
      dispatch(moveTask(dragIndex, hoverIndex));
    },
  };
};

const TaskList = withRouter(
  connect(
    mapStateToProps,
    null,
    mergeProps
  )(List)
);

export default TaskList;
