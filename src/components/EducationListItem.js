import React from 'react';
import '../styles/EducationListItem.scss';

class EducationListItem extends React.Component {
  render() {
    const { titleOfStudy, schoolName, fromYear, toYear } = this.props.education;

    return (
      <li className="EducationListItem">
        <p className="title-of-study">{titleOfStudy}</p>
        <p className="school-name">{schoolName}</p>
        <p className="duration">
          {toYear} - {fromYear}
        </p>
      </li>
    );
  }
}

export default EducationListItem;
