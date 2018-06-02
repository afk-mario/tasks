import update from 'immutability-helper';

import {
  ADD_TASK,
  CLEAR_TASKS,
  EDIT_TASK,
  DUPLICATE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
  MOVE_TASK,
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
    case MOVE_TASK:
      if (state.length < action.dragIndex - 1) return state;
      if (state.length < action.hoverIndex - 1) return state;

      const dragItem = state[action.dragIndex];
      return update(state, {
        $splice: [[action.dragIndex, 1], [action.hoverIndex, 0, dragItem]],
      });
    case CLEAR_TASKS:
      return [];
    case LOAD_TASKS:
      return action.items;
    default:
      return state;
  }
}

export default tasks;
