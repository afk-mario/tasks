import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { filters } from './filters';
import { setFilter } from './actions';

import './style.css';

const FilterComponent = ({ className, options, value, onChange }) => {
  return (
    <div className="filter-by">
      <span className="name">Filter by: </span>
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        getOptionLabel={(option: {}) => option.name}
        onChange={onChange}
        options={options}
        clearable={false}
        value={value}
        required
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { filter } = state;
  return {
    value: filter,
    options: filters,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: filter => dispatch(setFilter(filter)),
  };
};

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterComponent);

export default Filter;
