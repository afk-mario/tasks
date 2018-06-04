import { connect } from 'react-redux';

import ChartComponent from '../../components/chart';
import { filterTasks } from '../tasks/utils';
import { filters } from '../filter/filters';

const mapStateToProps = state => {
  const { tasks } = state;

  const completed = filterTasks(tasks, filters[4]);
  const idle = filterTasks(tasks, filters[5]);
  const started = filterTasks(tasks, filters[6]);

  const series = [completed.length, idle.length, started.length];

  return {
    type: 'Pie',
    chartData: {
      labels: ['completed', 'idle', 'started'],
      series,
    },
    options: {
      labelInterpolationFnc: value => value,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Charts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartComponent);

export default Charts;
