import { v4 } from 'uuid';

// Action to create a task with a unique ID
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

// Delete all the tasks on the state
export const CLEAR_TASKS = 'CLEAR_TASKS';
export function clearTasks() {
  return {
    type: CLEAR_TASKS,
  };
}

// Update a task
export const EDIT_TASK = 'EDIT_TASK';
export function editTask(item) {
  return {
    type: EDIT_TASK,
    item,
  };
}

// Duplicate a task
export const DUPLICATE_TASK = 'DUPLICATE_TASK';
export function duplicateTask(item) {
  const dup = { ...item, pk: v4() };
  return {
    type: DUPLICATE_TASK,
    item: dup,
  };
}

// Delete a task
export const DELETE_TASK = 'DELETE_TASK';
export function deleteTask(pk) {
  return {
    type: DELETE_TASK,
    pk,
  };
}

// Set the state to the array of tasks
export const LOAD_TASKS = 'LOAD_TASKS';
export function loadTasks(items) {
  return {
    type: LOAD_TASKS,
    items,
  };
}

// Move the task on the array
export const MOVE_TASK = 'MOVE_TASK';
export function moveTask(dragIndex, hoverIndex) {
  return {
    type: MOVE_TASK,
    dragIndex,
    hoverIndex,
  };
}
