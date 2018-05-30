import {
  ADD_TASK,
  CLEAR_TASKS,
  EDIT_TASK,
  DUPLICATE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
} from './actions';

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          ...action.item,
        },
      ];
    case EDIT_TASK:
      return state.map(
        item =>
          item.pk === action.item.pk
            ? {
                ...action.item,
              }
            : item
      );
    case DUPLICATE_TASK:
      return [
        ...state,
        {
          ...action.item,
        },
      ];
    case DELETE_TASK:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_TASKS:
      return [];
    case LOAD_TASKS:
      return action.items;
    default:
      return state;
  }
}

export default tasks;
