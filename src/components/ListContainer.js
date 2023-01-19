import React from 'react';
import '../styles/ListContainer.scss';
import EducationListItem from './EducationListItem';
import TaskListItem from './TaskListItem';

class ListContainer extends React.Component {
  render() {
    const { type, list } = this.props;
    const items = [];

    list.forEach((item) => {
      if (type === 'education') {
        items.push(<EducationListItem key={item.id} education={item} />);
      } else if (type === 'task') {
        items.push(<TaskListItem key={item.id} task={item.task} />);
      } else if (type === 'work-experience') {
      }
    });

    return (
      <ul className="ListContainer">
        {list.length !== 0 || <div className="empty-text">List is empty.</div>}
        {items}
      </ul>
    );
  }
}

export default ListContainer;
