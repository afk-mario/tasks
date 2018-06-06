import React from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router';

import Input from '../../components/input';
import TextArea from '../../components/textarea';
import Time from '../../components/time';
import spec from './spec';

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
      const { item } = nextProps;
      this.setState(item);
    }
  }

  onSelectOption(item) {
    const { value } = item;
    this.setState({
      duration: value,
    });
  }

  handleInputChange(event) {
    const { target, name } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { onSubmit, item } = this.props;

    event.preventDefault();
    onSubmit(this.state);

    if (item.pk != null) return;

    const state = Object.assign(
      {},
      ...spec.map(({ name, value }) => ({ [name]: value })),
    );

    this.setState(
      {
        ...state,
      },
      () => {
        // this.props.history.push('/tasks/');
      },
    );
  }

  // Read from the spec and set the corresponding input components.
  render() {
    const { options } = spec.find(item => item.name === 'duration-option');
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
            ),
        )}

        <label>Duration</label>
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
