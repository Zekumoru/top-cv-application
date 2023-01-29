import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TaskListItem({ id, task, onDelete }) {
  const remove = () => {
    onDelete(id);
  };

  return (
    <li className="TaskListItem delete-icon-container">
      {task}{' '}
      <FontAwesomeIcon
        onClick={remove}
        className="delete-icon"
        icon={faTrash}
      />
    </li>
  );
}

export default TaskListItem;
