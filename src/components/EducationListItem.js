import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/EducationListItem.scss';

function EducationListItem({ onDelete, education }) {
  const { id, titleOfStudy, schoolName, fromYear, toYear } = education;

  const remove = () => {
    onDelete(id);
  };

  return (
    <li className="EducationListItem">
      <p className="title-of-study delete-icon-container">
        {titleOfStudy}{' '}
        <FontAwesomeIcon
          onClick={remove}
          className="delete-icon"
          icon={faTrash}
        />
      </p>
      <p className="school-name">{schoolName}</p>
      <p className="duration">
        {toYear} - {fromYear}
      </p>
    </li>
  );
}

export default EducationListItem;
