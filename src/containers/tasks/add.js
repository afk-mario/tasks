import { connect } from 'react-redux';

import { addTask } from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const { states } = state || [];
  const item = Object.assign(
    {},
    ...spec.map(({ name, value }) => ({ [name]: value }))
  );

  return {
    item,
    options: states,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: item => {
      dispatch(addTask(item));
    },
  };
};

const AddTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default AddTask;
