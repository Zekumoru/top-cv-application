import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/CV.scss';

const MM_PER_16PX = 127 / 30;

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.cv = React.createRef();
  }

  updateRemSize = () => {
    const { width } = this.cv.current.getBoundingClientRect();
    const pixelPerMM = width / 210;
    const currentRemSize = MM_PER_16PX * pixelPerMM;

    this.cv.current.style.fontSize = `${currentRemSize}px`;
  };

  getEducationElements(educations) {
    if (educations.length === 0) {
      const samples = [];
      for (let i = 1; i <= 3; i++) {
        samples.push(
          <li key={'sample-' + i}>
            <h3 className="title-of-study">Some Degree</h3>
            <p className="school-name">Some University</p>
            <p className="duration">2023 - 2023</p>
          </li>
        );
      }
      return samples;
    }

    return educations.map((education) => {
      return (
        <li key={education.id}>
          <h3 className="title-of-study">{education.titleOfStudy}</h3>
          <p className="school-name">{education.schoolName}</p>
          <p className="duration">
            {education.fromYear} - {education.toYear}
          </p>
        </li>
      );
    });
  }

  getWorkExperienceElements(workExperiences) {
    if (workExperiences.length === 0) {
      const samples = [];
      for (let i = 1; i <= 3; i++) {
        samples.push(
          <li key={'sample-' + i}>
            <h3 className="position-title">Some Position</h3>
            <p className="company-name">Some Company</p>
            <p className="duration">2023 - 2023</p>
            <h4>Main Tasks</h4>
            <ul>
              <li>
                <span className="bullet">&gt;</span>Task A
              </li>
              <li>
                <span className="bullet">&gt;</span>Task B
              </li>
              <li>
                <span className="bullet">&gt;</span>Task C
              </li>
            </ul>
          </li>
        );
      }
      return samples;
    }

    return workExperiences.map((workExperience) => {
      return (
        <li key={workExperience.id}>
          <h3 className="position-title">{workExperience.positionTitle}</h3>
          <p className="company-name">{workExperience.companyName}</p>
          <p className="duration">
            {workExperience.fromYear} - {workExperience.toYear}
          </p>
          <h4>Main Tasks</h4>
          <ul>
            {workExperience.mainTasks.map((task) => {
              return (
                <li key={task.id}>
                  <span className="bullet">&gt;</span>
                  {task.task}
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    const educations = this.getEducationElements(data.educations);
    const workExperiences = this.getWorkExperienceElements(
      data.workExperiences
    );

    return (
      <div className="cv" ref={this.cv}>
        <section className="personal-details">
          <h1>
            {data.firstName || 'FirstName'} {data.lastName || 'LastName'}
          </h1>
          <p className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            {data.email || 'email@example.com'}
          </p>
          <p className="phone-number">
            <FontAwesomeIcon icon={faPhone} />
            {data.phoneNumber || '+12 123 456 7890'}
          </p>
        </section>
        <section className="education">
          <h2>Education</h2>
          <ul>{educations}</ul>
        </section>
        <section className="work-experience">
          <h2>Work Experience</h2>
          <ul>{workExperiences}</ul>
        </section>
        <footer>
          <p>Generated by CV Builder</p>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    this.updateRemSize();
    window.addEventListener('resize', this.updateRemSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRemSize);
  }
}

export default CV;
