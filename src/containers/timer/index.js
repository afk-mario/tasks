import { connect } from 'react-redux';
import { getSeconds } from '../../lib/utils';
import TimerComponent from '../../components/timer';
import { stopTimer, startTimer, clearTimer, resetTimer } from './actions';
import { editTask } from '../tasks/actions';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
  const { baseTime, startedAt, stoppedAt, pk } = state.timer;
  const { tasks } = state;
  const task = tasks.find(item => item.pk === pk);

  const updateInterval = 1000;
  let text = task === undefined ? 'click ▶ to start' : `${task.name}`;
  return { baseTime, startedAt, stoppedAt, updateInterval, text, task };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (task, time) => {
      if (task) dispatch(editTask({ ...task, timeDone: getSeconds(time) }));
    },
    stopTimer: () => dispatch(stopTimer()),
    clearTimer: () => dispatch(clearTimer()),
    resetTimer: () => dispatch(resetTimer()),
    startTimer: (pk, time) => dispatch(startTimer(time * 1000, pk)),
    titleClick: pk => {
      if (pk) dispatch(push(`tasks/edit/${pk}`));
    },
  };
};

const Timer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerComponent);

export default Timer;
