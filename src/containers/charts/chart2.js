import { connect } from 'react-redux';

import ChartComponent from '../../components/chart';
import { filterTasks } from '../tasks/utils';
import { filters } from '../filter/filters';

const mapStateToProps = state => {
  const { tasks } = state;

  const short = filterTasks(tasks, filters[1]);
  const medium = filterTasks(tasks, filters[2]);
  const long = filterTasks(tasks, filters[3]);

  const times = [short.length, medium.length, long.length];

  return {
    type: 'Pie',
    chartData: {
      labels: ['short', 'medium', 'long'],
      series: times,
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
