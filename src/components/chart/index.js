import React from 'react';
import ChartistGraph from 'react-chartist';

import './style.css';
/**
 * Generic chart component using Chartist
 * @param  {} {title
 * @param  {} chartData
 * @param  {} type
 * @param  {} options}
 */
const ChartComponent = ({ title, chartData, type, options }) => {
  return (
    <div className="chart">
      <h2>{title}</h2>
      <ChartistGraph data={chartData} type={type} options={options} />
    </div>
  );
};

export default ChartComponent;
