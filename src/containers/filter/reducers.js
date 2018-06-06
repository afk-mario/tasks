import { SET_FILTER } from './actions';
import { filters } from './filters';

// The default filter is NONE, the first one on the array of filter
const initialState = filters[0];

// Set the state of filter
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default reducer;
