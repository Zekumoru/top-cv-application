import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';
import ListContainer from './components/ListContainer';
import { nanoid } from 'nanoid';
import './styles/App.scss';
import CVViewer from './components/CVViewer';
import CV from './components/CV';
import Footer from './components/Footer';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_NUMBER_REGEX =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const currentYear = new Date().getFullYear();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPageIndex: 0,
      finished: false,
      firstName: '',
      validFirstName: false,
      aggressiveFirstName: false,
      lastName: '',
      validLastName: false,
      aggressiveLastName: false,
      email: '',
      validEmail: false,
      aggressiveEmail: false,
      phoneNumber: '',
      validPhoneNumber: false,
      aggressivePhoneNumber: false,
      titleOfStudy: '',
      validTitleOfStudy: false,
      showErrorTitleOfStudy: false,
      schoolName: '',
      validSchoolName: false,
      showErrorSchoolName: false,
      companyName: '',
      validCompanyName: false,
      showErrorCompanyName: false,
      positionTitle: '',
      validPositionTitle: false,
      showErrorPositionTitle: false,
      mainTask: '',
      validMainTask: false,
      showErrorMainTask: false,
      fromYear: currentYear,
      toYear: currentYear,
      educations: [],
      mainTasks: [],
      workExperiences: [],
    };
  }

  onChange = ({ type, value, key }) => {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.substring(1);
    this.setState((state) => {
      const obj = {};

      if (key === 'fromYear' && value > state.toYear) {
        obj.toYear = value;
      }

      if (state.hasOwnProperty(`valid${capitalizedKey}`)) {
        obj[`valid${capitalizedKey}`] = this.validate(value, type);
      }

      if (state.hasOwnProperty(`showError${capitalizedKey}`)) {
        obj[`showError${capitalizedKey}`] = false;
      }

      return {
        [key]: value,
        ...obj,
      };
    });
  };

  onBlur = ({ key }) => {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.substring(1);
    this.setState((state) => {
      if (state.hasOwnProperty(`showError${capitalizedKey}`)) {
        return {
          [`showError${capitalizedKey}`]: false,
        };
      }

      if (state.hasOwnProperty(`aggressive${capitalizedKey}`)) {
        return {
          [`aggressive${capitalizedKey}`]: true,
        };
      }
    });
  };

  validate(input, type) {
    if (type === 'text') {
      return input !== '';
    } else if (type === 'email') {
      return EMAIL_REGEX.test(input);
    } else if (type === 'tel') {
      return PHONE_NUMBER_REGEX.test(input);
    }
    return true;
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  previousPage = (e) => {
    this.setState((state) => {
      if (state.finished) {
        return {
          currentPageIndex: 2,
          finished: false,
        };
      }

      const pageIndex = state.currentPageIndex - 1;
      if (pageIndex < 0) return;

      return {
        currentPageIndex: pageIndex,
      };
    }, this.scrollToTop);

    e.preventDefault();
  };

  nextPage = (e) => {
    this.setState((state) => {
      if (
        state.currentPageIndex === 0 &&
        (!state.validFirstName ||
          !state.validLastName ||
          !state.validEmail ||
          !state.validPhoneNumber)
      ) {
        return {
          aggressiveFirstName: true,
          aggressiveLastName: true,
          aggressiveEmail: true,
          aggressivePhoneNumber: true,
        };
      }

      const pageIndex = state.currentPageIndex + 1;
      if (pageIndex >= this.pages.length) {
        return {
          finished: true,
        };
      }

      return {
        currentPageIndex: pageIndex,
      };
    }, this.scrollToTop);

    e.preventDefault();
  };

  addEducation = (e) => {
    this.setState(
      (state) => {
        if (!state.validTitleOfStudy || !state.validSchoolName) {
          return {
            showErrorTitleOfStudy: !state.validTitleOfStudy,
            showErrorSchoolName: !state.validSchoolName,
          };
        }

        return {
          educations: [
            ...state.educations,
            {
              id: nanoid(),
              titleOfStudy: state.titleOfStudy,
              schoolName: state.schoolName,
              fromYear: Number(state.fromYear),
              toYear: Number(state.toYear),
            },
          ],
          validTitleOfStudy: false,
          showErrorTitleOfStudy: false,
          validSchoolName: false,
          showErrorSchoolName: false,
        };
      },
      () => {
        if (this.state.validTitleOfStudy || this.state.validSchoolName) {
          return;
        }

        this.setState({
          titleOfStudy: '',
          schoolName: '',
          fromYear: currentYear,
          toYear: currentYear,
        });
      }
    );
    e.preventDefault();
  };

  deleteEducation = (id) => {
    this.setState({
      educations: this.state.educations.filter((e) => e.id !== id),
    });
  };

  addTask = (e) => {
    this.setState(
      (state) => {
        if (!state.validMainTask) {
          return {
            showErrorMainTask: !state.validMainTask,
          };
        }

        return {
          mainTasks: [
            ...state.mainTasks,
            {
              id: nanoid(),
              task: state.mainTask,
            },
          ],
          validMainTask: false,
          showErrorMainTask: false,
        };
      },
      () => this.setState({ mainTask: '' })
    );
    e.preventDefault();
  };

  deleteTask = (id) => {
    this.setState({
      mainTasks: this.state.mainTasks.filter((t) => t.id !== id),
    });
  };

  addWorkExperience = (e) => {
    this.setState(
      (state) => {
        if (!state.validCompanyName || !state.validPositionTitle) {
          return {
            showErrorCompanyName: !state.validCompanyName,
            showErrorPositionTitle: !state.validPositionTitle,
          };
        }

        return {
          workExperiences: [
            ...state.workExperiences,
            {
              id: nanoid(),
              companyName: state.companyName,
              positionTitle: state.positionTitle,
              mainTasks: state.mainTasks,
              fromYear: Number(state.fromYear),
              toYear: Number(state.toYear),
            },
          ],
          validCompanyName: false,
          validPositionTitle: false,
        };
      },
      () => {
        if (this.state.validCompanyName || this.state.validPositionTitle) {
          return;
        }

        this.setState({
          companyName: '',
          positionTitle: '',
          mainTasks: [],
          fromYear: currentYear,
          toYear: currentYear,
        });
      }
    );
    e.preventDefault();
  };

  deleteWorkExperience = (id) => {
    this.setState({
      workExperiences: this.state.workExperiences.filter((w) => w.id !== id),
    });
  };

  print = (e) => {
    window.print();
    e.preventDefault();
  };

  render() {
    this.pages = [
      {
        title: 'Personal Details',
        content: (
          <div className="content">
            <LabeledInput
              id="first-name"
              label="First Name"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.firstName}
              valid={this.state.validFirstName}
              aggressiveValidation={this.state.aggressiveFirstName}
              errorText="First name cannot be empty!"
            />
            <LabeledInput
              id="last-name"
              label="Last Name"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.lastName}
              valid={this.state.validLastName}
              aggressiveValidation={this.state.aggressiveLastName}
              errorText="Last name cannot be empty!"
            />
            <LabeledInput
              id="email"
              label="Email"
              type="email"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.email}
              valid={this.state.validEmail}
              aggressiveValidation={this.state.aggressiveEmail}
              errorText="Email must be valid!"
            />
            <LabeledInput
              id="phone-number"
              label="Phone Number"
              type="tel"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.phoneNumber}
              valid={this.state.validPhoneNumber}
              aggressiveValidation={this.state.aggressivePhoneNumber}
              errorText="Phone number must be valid!"
            />
          </div>
        ),
      },
      {
        title: 'Education',
        content: (
          <div className="content">
            <LabeledInput
              id="title-of-study"
              label="Title of Study"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.titleOfStudy}
              valid={this.state.validTitleOfStudy}
              showError={this.state.showErrorTitleOfStudy}
              errorText="Title of study cannot be empty!"
            />
            <LabeledInput
              id="school-name"
              label="School Name"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.schoolName}
              valid={this.state.validSchoolName}
              showError={this.state.showErrorSchoolName}
              errorText="School name cannot be empty!"
            />
            <LabeledInput
              id="from-year"
              label="From"
              type="dropdown"
              rangeFrom={1920}
              rangeTo={new Date().getFullYear()}
              onChange={this.onChange}
              value={this.state.fromYear}
            />
            <LabeledInput
              id="to-year"
              label="To"
              type="dropdown"
              rangeFrom={this.state.fromYear}
              rangeTo={new Date().getFullYear()}
              onChange={this.onChange}
              value={this.state.toYear}
            />
            <button onClick={this.addEducation}>Add</button>
            <ListContainer
              list={this.state.educations}
              type="education"
              emptyText="No education added yet."
              onDelete={this.deleteEducation}
            />
          </div>
        ),
      },
      {
        title: 'Work Experience',
        content: (
          <div className="content">
            <LabeledInput
              id="company-name"
              label="Company Name"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.companyName}
              valid={this.state.validCompanyName}
              showError={this.state.showErrorCompanyName}
              errorText="Company name must not be empty!"
            />
            <LabeledInput
              id="position-title"
              label="Position Title"
              type="text"
              onChange={this.onChange}
              onBlur={this.onBlur}
              value={this.state.positionTitle}
              valid={this.state.validPositionTitle}
              showError={this.state.showErrorPositionTitle}
              errorText="Position title must not be empty!"
            />
            <LabeledInput
              id="main-task"
              label="Main Tasks"
              type="text"
              onChange={this.onChange}
              onEnter={this.addTask}
              onBlur={this.onBlur}
              value={this.state.mainTask}
              valid={this.state.validMainTask}
              showError={this.state.showErrorMainTask}
              errorText="Type in a task!"
            />
            <button onClick={this.addTask}>Add Task</button>
            <ListContainer
              list={this.state.mainTasks}
              type="task"
              emptyText="No tasks added yet."
              onDelete={this.deleteTask}
            />
            <LabeledInput
              id="from-year"
              label="From"
              type="dropdown"
              rangeFrom={1920}
              rangeTo={new Date().getFullYear()}
              onChange={this.onChange}
              value={this.state.fromYear}
            />
            <LabeledInput
              id="to-year"
              label="To"
              type="dropdown"
              rangeFrom={this.state.fromYear}
              rangeTo={new Date().getFullYear()}
              onChange={this.onChange}
              value={this.state.toYear}
            />
            <button onClick={this.addWorkExperience}>
              Add Work Experience
            </button>
            <ListContainer
              list={this.state.workExperiences}
              type="work-experience"
              emptyText="No experiences added yet."
              onDelete={this.deleteWorkExperience}
            />
          </div>
        ),
      },
    ];

    const { currentPageIndex, finished } = this.state;
    const { title, content } = this.pages[currentPageIndex];

    const main = finished ? (
      <div className="congratulations main">
        <h1>Congratulations!</h1>
        <p>You have finished creating your personal CV!</p>
        <p>
          You may print it now! Use A4 size.{' '}
          {
            '(The button below might not work on mobile so use the print button on your browser.)'
          }
        </p>
        <button className="primary" onClick={this.print}>
          Print
        </button>
        <p>Found a mistake? Go back to fix it!</p>
        <button onClick={this.previousPage}>Prev</button>
      </div>
    ) : (
      <Form
        className="main"
        title={title}
        content={content}
        pageIndex={currentPageIndex}
        lastPage={currentPageIndex === this.pages.length - 1}
        onPreviousPage={this.previousPage}
        onNextPage={this.nextPage}
      />
    );

    return (
      <div className="App">
        <TopNavBar />
        {main}
        <div className="preview">
          <h2>Preview</h2>
          <CVViewer data={this.state} />
        </div>
        <CV data={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
