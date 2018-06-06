import React from 'react';
import Chart from './chart';
import Chart2 from './chart2';
import Chart3 from './chart3';

import './style.css';

const Charts = () => (
  <section className="wrapper charts">
    <Chart title="% Done" />
    <div className="pies">
      <Chart2 title="By duration" />
      <Chart3 title="By status" />
    </div>
  </section>
);

export default Charts;
