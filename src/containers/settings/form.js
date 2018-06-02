import React from 'react';
import { version } from '../../../package.json';
import Load from '../../components/load';

import './style.css';

let SettingsForm = ({ state, loadState, saveState, ip, onChangeIp }) => {
  return (
    <section className="settings wrapper">
      <div className="version-number">V.{version}</div>
      <section className="save">
        <div
          className="button"
          onClick={() => {
            saveState(state);
          }}
        >
          save application
        </div>
      </section>
      <Load name="load application" onLoad={loadState} />
    </section>
  );
};

export default SettingsForm;
