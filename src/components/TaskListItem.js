import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

class TaskListItem extends React.Component {
  delete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { task } = this.props;
    return (
      <li className="TaskListItem delete-icon-container">
        {task}{' '}
        <FontAwesomeIcon
          onClick={this.delete}
          className="delete-icon"
          icon={faTrash}
        />
      </li>
    );
  }
}

export default TaskListItem;
