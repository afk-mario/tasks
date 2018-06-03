import { SET_FILTER } from './actions';
import { filters } from './filters';

const initialState = filters[0];

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default reducer;
