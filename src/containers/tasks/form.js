import React from 'react';

import Input from '../../components/input';
import spec from './spec';

import { withRouter } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleSubmit(event) {
    const { onSubmit, item } = this.props;

    console.log(this.state);

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
    return (
      <form className="dark-container" onSubmit={this.handleSubmit}>
        {spec.map(
          (item, i) =>
            item.hide ? (
              ''
            ) : (
              <Input
                key={i}
                {...item}
                value={this.state[item.name]}
                onChange={this.handleInputChange}
              />
            )
        )}
        <button className="button blue" type="submit">
          SAVE
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
