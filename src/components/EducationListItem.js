import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/EducationListItem.scss';

class EducationListItem extends React.Component {
  delete = () => {
    this.props.onDelete(this.props.education.id);
  };

  render() {
    const { titleOfStudy, schoolName, fromYear, toYear } = this.props.education;

    return (
      <li className="EducationListItem">
        <p className="title-of-study delete-icon-container">
          {titleOfStudy}{' '}
          <FontAwesomeIcon
            onClick={this.delete}
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
}

export default EducationListItem;
