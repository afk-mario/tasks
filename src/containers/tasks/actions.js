import { v4 } from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export function addTask(item) {
  return {
    type: ADD_TASK,
    item: {
      pk: v4(),
      ...item,
    },
  };
}

export const CLEAR_TASKS = 'CLEAR_TASKS';
export function clearTasks() {
  return {
    type: CLEAR_TASKS,
  };
}

export const EDIT_TASK = 'EDIT_TASK';
export function editTask(item) {
  return {
    type: EDIT_TASK,
    item,
  };
}

export const DUPLICATE_TASK = 'DUPLICATE_TASK';
export function duplicateTask(item) {
  const dup = { ...item, pk: v4() };
  return {
    type: DUPLICATE_TASK,
    item: dup,
  };
}

export const DELETE_TASK = 'DELETE_TASK';
export function deleteTask(pk) {
  return {
    type: DELETE_TASK,
    pk,
  };
}

export const LOAD_TASKS = 'LOAD_TASKS';
export function loadTasks(items) {
  return {
    type: LOAD_TASKS,
    items,
  };
}
