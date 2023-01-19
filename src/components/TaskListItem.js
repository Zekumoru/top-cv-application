import React from 'react';
import '../styles/TaskListItem.scss';

class TaskListItem extends React.Component {
  render() {
    const { task } = this.props;
    return <div className="TaskListItem">{task}</div>;
  }
}

export default TaskListItem;
