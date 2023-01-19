import React from 'react';
import '../styles/WorkExperienceListItem.scss';

class WorkExperienceListItem extends React.Component {
  render() {
    const { positionTitle, companyName, fromYear, toYear, mainTasks } =
      this.props.workExperience;

    const tasks = [];
    mainTasks.forEach((task) => {
      tasks.push(<li key={task.id}>- {task.task}</li>);
    });

    return (
      <li className="WorkExperienceListItem">
        <p className="position-title">{positionTitle}</p>
        <p className="company-name">{companyName}</p>
        <p className="duration">
          {toYear} - {fromYear}
        </p>
        <p className="main-tasks">Main Tasks</p>
        <ul>{tasks}</ul>
      </li>
    );
  }
}

export default WorkExperienceListItem;
