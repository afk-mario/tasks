import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getHoursMinsValue } from '../../lib/utils';

import './style.css';

// Generic input component to input hours and minutes
class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: Math.floor(props.value / 60),
      minutes: props.value % 60,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getMinutesValue = this.getMinutesValue.bind(this);
  }

  // get the minutes value based on hours
  getMinutesValue() {
    const { hours, minutes } = this.state;
    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  }

  // depening on the input element changed set the state
  handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState(
      {
        [name]: parseInt(value, 10),
      },
      () => {
        this.props.onChange({
          target: {
            type: 'time',
            name: this.props.name,
            value: this.getMinutesValue(),
          },
        });
      },
    );
  }

  render() {
    const { id, name, type, value, colon, maxHours, maxMinutes } = this.props;

    const [hours = 0, minutes = 0] = getHoursMinsValue(
      value,
      maxHours,
      maxMinutes,
    );

    const className = classNames({
      [`time-${type}`]: true,
      input: true,
    });

    const selector = id || name;

    return (
      <div className={className}>
        <div className="time-input" id={selector}>
          <input
            type="number"
            name="hours"
            id={`${selector}-hours`}
            min="0"
            max={maxHours}
            step="1"
            value={`${hours}`}
            onChange={this.handleChange}
          />
          <span>{colon}</span>
          <input
            type="number"
            id={`${selector}-minutes`}
            name="minutes"
            min="0"
            max={maxMinutes}
            step="1"
            value={`${minutes}`}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Time.defaultProps = {
  value: 0,
  maxHours: 24,
  maxMinutes: 59,
  colon: ':',
};

Time.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxHours: PropTypes.number,
  maxMinutes: PropTypes.number,
  colon: PropTypes.string,
  value: PropTypes.number,
};

export default Time;
