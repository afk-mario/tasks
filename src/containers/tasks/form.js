import React from 'react';
import Select from 'react-select';

import Input from '../../components/input';
import TextArea from '../../components/textarea';
import Time from '../../components/time';
import spec from './spec';

import { withRouter } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.params.pk) return;
    if (nextProps.match.params.pk !== this.props.match.params.pk) {
      const item = nextProps.item;
      this.setState(item);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSelectOption(item) {
    const { value } = item;
    this.setState({
      duration: value,
    });
  }

  handleSubmit(event) {
    const { onSubmit, item } = this.props;

    event.preventDefault();
    onSubmit(this.state);

    if (item.pk != null) return;

    const state = Object.assign(
      {},
      ...spec.map(({ name, value }) => ({ [name]: value }))
    );

    this.setState(
      {
        ...state,
      },
      () => {
        // this.props.history.push('/tasks/');
      }
    );
  }

  render() {
    const options = spec.find(item => item.name === 'duration-option').options;
    const duration = spec.find(item => item.name === 'duration');
    const selected =
      options.find(item => item.value === this.state.duration) ||
      options[options.length - 1];

    return (
      <form className="wrapper" onSubmit={this.handleSubmit}>
        {spec.map(
          (item, i) =>
            item.hide ? (
              ''
            ) : item.type === 'textarea' ? (
              <TextArea
                key={i}
                {...item}
                value={this.state[item.name]}
                onChange={this.handleInputChange}
              />
            ) : (
              <Input
                key={i}
                {...item}
                value={this.state[item.name]}
                onChange={this.handleInputChange}
              />
            )
        )}

        <Select
          className="custom-select"
          classNamePrefix="custom-select"
          onChange={this.onSelectOption}
          options={options}
          value={selected}
          clearable={false}
          required
        />

        <Time
          {...duration}
          maxHours={2}
          value={this.state[duration.name]}
          onChange={this.handleInputChange}
        />

        <button className="button" type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
