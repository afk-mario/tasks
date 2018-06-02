import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { addTask } from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const item = Object.assign(
    {},
    ...spec.map(({ name, value }) => ({ [name]: value }))
  );

  return {
    item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: item => {
      dispatch(addTask(item));
      dispatch(push('/tasks/'));
    },
  };
};

const AddTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default AddTask;
