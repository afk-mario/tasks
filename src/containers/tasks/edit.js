import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { editTask } from './actions';
import Form from './form';

// On editing a task, search the task on the redux state and pass it to the form
const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { tasks, states } = state || [];
  const single = tasks.filter(item => item.pk === pk)[0] || undefined;
  return {
    item: single,
    options: states,
  };
};

// When the form is submitted dispatch the update task action and return to the home route
const mapDispatchToProps = dispatch => ({
  onSubmit: item => {
    dispatch(editTask(item));
    dispatch(push('/tasks/'));
  },
});

const EditTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default EditTask;
