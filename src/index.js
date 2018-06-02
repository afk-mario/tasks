import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import thunk from 'redux-thunk';
import throttle from 'lodash.throttle';

import AppReducer from './reducers';
import App from './containers/app';

import { loadState, saveState } from './lib/localStorage';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const a = routerMiddleware(history);
const middleware = [a, thunk];

const persistedState = loadState();
const store = createStore(
  AppReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(
  throttle(() => {
    const { tasks, settings } = store.getState();
    saveState({
      tasks,
      settings,
    });
  }, 1000),
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
