import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './containers/tasks/reducers';
import timer from './containers/timer/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  tasks,
  timer,
  settings,
  router: routerReducer,
});

export default app;
