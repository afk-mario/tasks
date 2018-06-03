import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { editTask } from './actions';
import Form from './form';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { tasks, states } = state || [];
  const single = tasks.filter(item => item.pk === pk)[0] || undefined;
  return {
    item: single,
    options: states,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: item => {
      dispatch(editTask(item));
      dispatch(push('/tasks/'));
    },
  };
};

const EditTask = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default EditTask;
