import { connect } from 'react-redux';
import { exportState } from '../../lib/export';
import Form from './save_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { tasks } = state || [];
  const task = tasks.filter(item => item.pk === pk)[0] || undefined;
  if (!task) {
    props.history.push('/tasks/');
  }
  return {
    item: task,
    items: tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: ({ item, name }) => {
      exportState({ items: item.data, fileName: name, objectName: 'data' });
      props.history.push('/tasks/');
    },
  };
};

const Save = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);

export default Save;
