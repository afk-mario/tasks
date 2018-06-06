import { connect } from 'react-redux';
import { loadTasks } from '../tasks/actions';
import exportState from '../../lib/export';
import Form from './form';
import './style.css';

const mapStateToProps = state => {
  const { tasks } = state || [];
  return { tasks };
};

const mapDispatchToProps = dispatch => ({
  // function to export the state to a JSON file
  saveState: tasks => {
    exportState({ items: tasks, fileName: 'tasks', objectName: 'tasks' });
  },
  // function to load the app state from a JSON file
  loadState: files => {
    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        try {
          const savedState = JSON.parse(fileAsBinaryString);
          const { tasks } = savedState || [];

          dispatch(loadTasks(tasks));
        } catch (err) {
          console.log(fileAsBinaryString);
          console.log(err);
        }
      };

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.readAsBinaryString(file);
    });
  },
});

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default Settings;
