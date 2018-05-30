import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NoMatch from '../../components/404';
import routes from '../../routes';

import './style.css';
import './style.css';
import './button.css';
import './form.css';
import './notif.css';

export default history => {
  return (
    <Router history={history.history}>
      <div>
        <Header />
        <div className="page-child">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
