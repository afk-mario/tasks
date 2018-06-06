import { connect } from 'react-redux';

import ChartComponent from '../../components/chart';
import { filterTasks, getPorcentages } from '../tasks/utils';
import { filters } from '../filter/filters';

// First chart showing porcentage of completition on tasks depending on the duration
const mapStateToProps = state => {
  const { tasks } = state;

  const filteredItems = filterTasks(tasks, filters[6]);

  const short = getPorcentages(filterTasks(filteredItems, filters[1]));
  const medium = getPorcentages(filterTasks(filteredItems, filters[2]));
  const long = getPorcentages(filterTasks(filteredItems, filters[3]));

  let labels = [short.length, medium.length, long.length].sort((a, b) => a - b);
  labels = Array.from(Array(labels[labels.length - 1]).keys());

  return {
    type: 'Line',
    chartData: {
      labels,
      series: [short, medium, long],
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
