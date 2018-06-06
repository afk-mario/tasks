// function to load the state from local storage
export const loadState = () => {
  try {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson === null) return undefined;

    const tasks = JSON.parse(tasksJson);

    return { tasks };
  } catch (err) {
    return undefined;
  }
};

// function to save the state to local storage
export const saveState = ({ tasks }) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (err) {
    console.error(err);
  }
};
