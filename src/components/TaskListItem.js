import React from 'react';
import '../styles/TaskListItem.scss';

class TaskListItem extends React.Component {
  render() {
    const { task } = this.props;
    return <li className="TaskListItem">{task}</li>;
  }
}

export default TaskListItem;
