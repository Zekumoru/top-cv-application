import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/WorkExperienceListItem.scss';

function WorkExperienceListItem({ onDelete, workExperience }) {
  const { id, positionTitle, companyName, fromYear, toYear, mainTasks } =
    workExperience;

  const remove = () => {
    onDelete(id);
  };

  const tasks = [];
  mainTasks.forEach((task) => {
    tasks.push(<li key={task.id}>- {task.task}</li>);
  });

  return (
    <li className="WorkExperienceListItem">
      <p className="position-title delete-icon-container">
        {positionTitle}{' '}
        <FontAwesomeIcon
          onClick={remove}
          className="delete-icon"
          icon={faTrash}
        />
      </p>
      <p className="company-name">{companyName}</p>
      <p className="duration">
        {toYear} - {fromYear}
      </p>
      {tasks.length === 0 || <p className="main-tasks">Main Tasks</p>}
      {tasks.length === 0 || <ul>{tasks}</ul>}
    </li>
  );
}

export default WorkExperienceListItem;
