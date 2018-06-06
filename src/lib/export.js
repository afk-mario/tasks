import FileSaver from 'file-saver';

// Function to save the stat on a file
export default ({ items, fileName, objectName }) => {
  console.table(items);
  let obj;
  if (objectName === undefined) {
    obj = {
      ...items,
    };
  } else {
    obj = {
      [objectName]: items,
    };
  }
  console.log(obj);
  const content = JSON.stringify(obj);
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  FileSaver.saveAs(blob, `${fileName}.json`);
};
