import { connect } from 'react-redux';

import ChartComponent from '../../components/chart';
import { filterTasks } from '../tasks/utils';
import { filters } from '../filter/filters';

// Show a pie chart based on the status of a task
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

const Charts = connect(
  mapStateToProps,
  null,
)(ChartComponent);

export default Charts;
