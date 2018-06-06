import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Header from '../../components/header';
import NoMatch from '../../components/404';
import routes from '../../routes';

import './style.css';
import './button.css';
import './form.css';

// Using reac-routes switch to handle routing
// And using as fall back the 404 component
export default history => (
  <Router history={history.history}>
    <div>
      <Header />
      <div className="page-child">
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  </Router>
);
