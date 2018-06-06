import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { filters } from './filters';
import { setFilter } from './actions';

import './style.css';

// Small component to change the filter using the select component
const FilterComponent = ({ options, value, onChange }) => (
  <div className="filter-by">
    <span className="name">Filter by: </span>
    <Select
      className="custom-select"
      classNamePrefix="custom-select"
      getOptionLabel={option => option.name}
      onChange={onChange}
      options={options}
      clearable={false}
      value={value}
      required
    />
  </div>
);

// Get the current filter from the state
const mapStateToProps = state => {
  const { filter } = state;
  return {
    value: filter,
    options: filters,
  };
};

// Return the set filter action to the component
const mapDispatchToProps = dispatch => {
  return {
    onChange: filter => dispatch(setFilter(filter)),
  };
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterComponent);

export default Filter;
