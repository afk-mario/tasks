import React from 'react';

import './style.css';
/**
 * Generic list of action buttons
 * @param  {} {items}
 */
export default ({ items }) => (
  <ul className="actions">
    {items.map((item, i) => (
      <li key={i} {...item}>
        {item.name}
      </li>
    ))}
  </ul>
);
