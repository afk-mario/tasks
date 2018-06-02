import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { editTask } from './actions';
import Form from './form';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { tasks, states } = state || [];
  const single = tasks.filter(item => item.pk === pk)[0] || undefined;
  /* if (!single) { */
  /*   props.history.push('/404'); */
  /*   return { item: {}, options: [] }; */
  /* } */
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

const EditTask = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);

export default EditTask;
