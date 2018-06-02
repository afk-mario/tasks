import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { clamp } from '../../lib/utils';

import './style.css';

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getStringValue = this.getStringValue.bind(this);
  }

  getHoursMinsValue(value, colon, maxHours, maxMinutes) {
    const time = value.split(colon) || [0, 0];

    const [hours, minutes] = time;

    const hoursClamped = clamp(parseInt(hours, 10), 0, maxHours);
    const minutesClamped =
      hoursClamped < maxHours ? clamp(parseInt(minutes, 10), 0, maxMinutes) : 0;

    const hoursFmt = hoursClamped.toString().padStart(2, '0');
    const minutesFmt = minutesClamped.toString().padStart(2, '0');

    return [hoursFmt, minutesFmt];
  }

  getStringValue() {
    const { hours, minutes } = this.state;
    const { colon } = this.props;
    const hoursFmt = hours.toString().padStart(2, '0');
    const minutesFmt = minutes.toString().padStart(2, '0');
    const value = `${hoursFmt}${colon}${minutesFmt}`;
    return value;
  }

  handleChange(event) {
    const target = event.target;
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onChange({
          target: {
            type: 'time',
            name: this.props.name,
            value: this.getStringValue(),
          },
        });
      },
    );
  }

  render() {
    const { id, name, type, value, colon, maxHours, maxMinutes } = this.props;

    const [hours = '00', minutes = '00'] = this.getHoursMinsValue(
      value,
      colon,
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
  maxHours: 24,
  maxMinutes: 59,
  colon: ':',
};

Time.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxHours: PropTypes.number.isRequired,
  maxMinutes: PropTypes.number.isRequired,
  colon: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Time;
