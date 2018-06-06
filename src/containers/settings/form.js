import React from 'react';
import { version } from '../../../package.json';
import Load from '../../components/load';

import './style.css';

// The settings component to handle saving and loading the application to a JSON file
const SettingsForm = ({ tasks, loadState, saveState, ip, onChangeIp }) => (
  <section className="settings wrapper">
    <div className="version-number">V.{version}</div>
    <section className="save">
      <div
        className="button"
        onClick={() => {
          console.log(tasks);
          saveState(tasks);
        }}
      >
        save application
      </div>
    </section>
    <Load name="load application" onLoad={loadState} />
  </section>
);

export default SettingsForm;
