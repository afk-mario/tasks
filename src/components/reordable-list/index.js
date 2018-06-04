import React from 'react';
import PropTypes from 'prop-types';
import ReordableRow from '../reordable-row';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Row from '../row';
import ActionButton from '../action-button';

import './style.css';

class ReordableList extends React.Component {
  render() {
    const {
      items,
      onClick,
      moveRow,
      onDelete,
      onDuplicate,
      onStart,
      onDone,
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
            {onDone && (
              <ActionButton id={item.id} onClick={onDone} className="done">
                ✓
              </ActionButton>
            )}
            {onStart && (
              <ActionButton
                id={item.id}
                onClick={() => onStart(item.id, index)}
                className="start"
              >
                ▶
              </ActionButton>
            )}
            {onDuplicate && (
              <ActionButton
                id={item.id}
                onClick={onDuplicate}
                className="duplicate"
              >
                D
              </ActionButton>
            )}
            {onDelete && (
              <ActionButton
                id={item.id}
                onClick={onDelete}
                className="delete"
                name={item.text}
              >
                X
              </ActionButton>
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
  onStart: PropTypes.func,
};

export default DragDropContext(HTML5Backend)(ReordableList);
