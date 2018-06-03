import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './containers/tasks/reducers';
import timer from './containers/timer/reducers';
import filter from './containers/filter/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  tasks,
  timer,
  filter,
  settings,
  router: routerReducer,
});

export default app;
