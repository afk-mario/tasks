export const SET_FILTER = 'SET_FILTER';
// Function creator for setting the task filter
export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter,
  };
}
