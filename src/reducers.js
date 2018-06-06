import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './containers/tasks/reducers';
import timer from './containers/timer/reducers';
import filter from './containers/filter/reducers';

// Combine all reducers and export them
const app = combineReducers({
  tasks,
  timer,
  filter,
  router: routerReducer,
});

export default app;
