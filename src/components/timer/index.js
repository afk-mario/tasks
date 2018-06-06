import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getElapsedTime, formatSeconds } from '../../lib/utils';
import ActionButton from '../action-button';

import './style.css';

// A timer generic component
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
      onDone,
      text,
      task,
      stopTimer,
      startTimer,
      clearTimer,
      resetTimer,
    } = this.props;

    let elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

    if (!task)
      return (
        <section className="timer">
          <div className="title">
            <span className="info">{`${text}`}</span>
          </div>
        </section>
      );

    elapsed = task.duration * 60000 - elapsed;
    elapsed = formatSeconds(elapsed, ':');
    const pk = task === undefined ? undefined : task.pk;
    const description = `# ${task.name} \n ${task.description}`;

    return (
      <section className="timer">
        <div className="title">
          <span
            className="info"
            onClick={() => titleClick(pk)}
          >{`${text}${elapsed}`}</span>
          <ActionButton onClick={() => onDone(task)}>✓</ActionButton>
          <ActionButton
            onClick={
              stoppedAt === undefined
                ? stopTimer
                : () => startTimer(pk, task.timeDone)
            }
          >
            {stoppedAt === undefined ? '||' : '▶'}
          </ActionButton>
          <ActionButton onClick={clearTimer}>■</ActionButton>
          <ActionButton onClick={resetTimer}>↺</ActionButton>
        </div>
        <ReactMarkdown className="description" source={description} />
        )
      </section>
    );
  }
}

export default Timer;
