import React from 'react';
import PropTypes from 'prop-types';
import ReordableRow from '../reordable-row';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Row from '../row';
import Delete from '../delete';
import Export from '../export';
import Send from '../send';
import Duplicate from '../duplicate';

import './style.css';

class ReordableList extends React.Component {
  render() {
    const {
      items,
      onClick,
      moveRow,
      onDelete,
      onDuplicate,
      onExport,
      onSend,
    } = this.props;

    if (items.length < 1)
      return (
        <ul className="list">
          <Row text="-- No Items --" />
        </ul>
      );
    return (
      <ul className="list">
        {items.map((item, index) => (
          <ReordableRow
            key={item.id}
            index={index}
            {...item}
            onClick={() => onClick(item.id)}
            moveRow={moveRow}
          >
            {onExport && <Export id={item.id} onClick={onExport} />}
            {onSend && <Send id={item.id} onClick={onSend} />}
            {onDuplicate && <Duplicate id={item.id} onClick={onDuplicate} />}
            {onDelete && (
              <Delete id={item.id} onClick={onDelete} name={item.text} />
            )}
          </ReordableRow>
        ))}
      </ul>
    );
  }
}

ReordableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  moveRow: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onDuplicate: PropTypes.func,
  onExport: PropTypes.func,
  onSend: PropTypes.func,
};

export default DragDropContext(HTML5Backend)(ReordableList);
