export const loadState = () => {
  try {
    const tasksJson = localStorage.getItem('tasks');
    const settingsJson = localStorage.getItem('settings');
    if (tasksJson === null || settingsJson === null) {
      return undefined;
    }

    const tasks = JSON.parse(tasksJson);
    const settings = JSON.parse(settingsJson);

    return { tasks, settings };
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({ tasks, settings }) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    const serializedSettings = JSON.stringify(settings);

    localStorage.setItem('tasks', serializedTasks);
    localStorage.setItem('settings', serializedSettings);
  } catch (err) {}
};
