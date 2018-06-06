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

// Create the history and use the react-routet-redux middleware to be able to dispatch actions to change the route.
const history = createBrowserHistory();
const a = routerMiddleware(history);
const middleware = [a, thunk];

// Load the state from local storage
const persistedState = loadState();
const store = createStore(
  AppReducer,
  persistedState,
  // Use the redux dev tools
  composeWithDevTools(applyMiddleware(...middleware)),
);

// Save the state on the local storage
store.subscribe(
  throttle(() => {
    const { tasks } = store.getState();
    saveState({
      tasks,
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
