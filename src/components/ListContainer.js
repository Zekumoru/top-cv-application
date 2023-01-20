import React from 'react';
import '../styles/ListContainer.scss';
import EducationListItem from './EducationListItem';
import TaskListItem from './TaskListItem';
import WorkExperienceListItem from './WorkExperienceListItem';

class ListContainer extends React.Component {
  render() {
    const { type, list, emptyText, onDelete } = this.props;
    const items = [];

    list.forEach((item) => {
      if (type === 'education') {
        items.push(
          <EducationListItem
            key={item.id}
            education={item}
            onDelete={onDelete}
          />
        );
      } else if (type === 'task') {
        items.push(
          <TaskListItem
            key={item.id}
            id={item.id}
            task={item.task}
            onDelete={onDelete}
          />
        );
      } else if (type === 'work-experience') {
        items.push(
          <WorkExperienceListItem
            key={item.id}
            workExperience={item}
            onDelete={onDelete}
          />
        );
      }
    });

    return (
      <ul className="ListContainer">
        {list.length !== 0 || (
          <div className="empty-text">{emptyText ?? 'List is empty.'}</div>
        )}
        {items}
      </ul>
    );
  }
}

export default ListContainer;
