import React from 'react';
import { getElapsedTime, formatSeconds } from '../../lib/utils';
import ActionButton from '../action-button';
import ReactMarkdown from 'react-markdown';

import './style.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { baseTime, startedAt, stoppedAt, task } = this.props;
      const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

      this.forceUpdate();
      this.props.onUpdate(task, elapsed);
    }, this.props.updateInterval || 33);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      titleClick,
      baseTime,
      startedAt,
      stoppedAt,
      text,
      task,
    } = this.props;
    const { stopTimer, startTimer } = this.props;
    let elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
    elapsed = formatSeconds(elapsed, ':');
    const pk = task === undefined ? undefined : task.pk;

    return (
      <section className="timer">
        <div className="title">
          <span
            className="info"
            onClick={() => titleClick(pk)}
          >{`${text} - ${elapsed}`}</span>
          {task && (
            <ActionButton
              onClick={
                stoppedAt === undefined
                  ? stopTimer
                  : () => startTimer(pk, task.timeDone)
              }
            >
              {stoppedAt === undefined ? '||' : '▶'}
            </ActionButton>
          )}
        </div>
        {task && (
          <ReactMarkdown className="description" source={task.description} />
        )}
      </section>
    );
  }
}

export default Timer;
