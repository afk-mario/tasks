import { START_TIMER, STOP_TIMER, RESET_TIMER, CLEAR_TIMER } from './actions';

const initialState = {
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined,
  pk: undefined,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RESET_TIMER:
      return {
        ...state,
        baseTime: 0,
        startedAt: state.startedAt ? action.now : undefined,
        stoppedAt: state.stoppedAt ? action.now : undefined,
      };
    case CLEAR_TIMER:
      return initialState;
    case START_TIMER:
      return {
        ...state,
        baseTime: action.baseTime,
        startedAt: action.now,
        stoppedAt: undefined,
        pk: action.pk,
      };
    case STOP_TIMER:
      return {
        ...state,
        stoppedAt: action.now,
      };
    default:
      return state;
  }
}

export default reducer;
