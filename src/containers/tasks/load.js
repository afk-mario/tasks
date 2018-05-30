import { connect } from 'react-redux';
import { addTask } from './actions';
import Load from '../../components/load';

const mapStateToProps = state => {
  return {
    name: 'Load \nTask',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          const name = file.name.replace(/(.*)\.(.*?)$/, '$1');
          try {
            const savedState = JSON.parse(fileAsBinaryString);
            const item = {
              name,
              data: savedState.data,
            };
            dispatch(addTask(item));
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
  };
};

const LoadTasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Load);

export default LoadTasks;
