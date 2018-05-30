import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './containers/tasks/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  tasks,
  settings,
  router: routerReducer,
});

export default app;
