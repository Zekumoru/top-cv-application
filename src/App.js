import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';
import ListContainer from './components/ListContainer';
import { nanoid } from 'nanoid';
import './styles/App.scss';
import CVViewer from './components/CVViewer';
import CV from './components/CV';

const currentYear = new Date().getFullYear();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPageIndex: 0,
      finished: true,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      titleOfStudy: '',
      schoolName: '',
      companyName: '',
      positionTitle: '',
      mainTask: '',
      fromYear: currentYear,
      toYear: currentYear,
      educations: [],
      mainTasks: [],
      workExperiences: [],
    };
  }

  onChange = (data) => {
    this.setState({ ...data });
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
    });

    e.preventDefault();
  };

  nextPage = (e) => {
    this.setState((state) => {
      const pageIndex = state.currentPageIndex + 1;
      if (pageIndex >= this.pages.length) {
        return {
          finished: true,
        };
      }

      return {
        currentPageIndex: pageIndex,
      };
    });

    e.preventDefault();
  };

  addEducation = (e) => {
    this.setState(
      {
        educations: [
          ...this.state.educations,
          {
            id: nanoid(),
            titleOfStudy: this.state.titleOfStudy,
            schoolName: this.state.schoolName,
            fromYear: Number(this.state.fromYear),
            toYear: Number(this.state.toYear),
          },
        ],
      },
      () => {
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

  addTask = (e) => {
    this.setState(
      {
        mainTasks: [
          ...this.state.mainTasks,
          {
            id: nanoid(),
            task: this.state.mainTask,
          },
        ],
      },
      () => this.setState({ mainTask: '' })
    );
    e.preventDefault();
  };

  addWorkExperience = (e) => {
    this.setState(
      {
        workExperiences: [
          ...this.state.workExperiences,
          {
            id: nanoid(),
            companyName: this.state.companyName,
            positionTitle: this.state.positionTitle,
            mainTasks: this.state.mainTasks,
            fromYear: Number(this.state.fromYear),
            toYear: Number(this.state.toYear),
          },
        ],
      },
      () =>
        this.setState({
          companyName: '',
          positionTitle: '',
          mainTasks: [],
          fromYear: currentYear,
          toYear: currentYear,
        })
    );
    e.preventDefault();
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
              value={this.state.firstName}
            />
            <LabeledInput
              id="last-name"
              label="Last Name"
              type="text"
              onChange={this.onChange}
              value={this.state.lastName}
            />
            <LabeledInput
              id="email"
              label="Email"
              type="email"
              onChange={this.onChange}
              value={this.state.email}
            />
            <LabeledInput
              id="phone-number"
              label="Phone Number"
              type="tel"
              onChange={this.onChange}
              value={this.state.phoneNumber}
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
              value={this.state.titleOfStudy}
            />
            <LabeledInput
              id="school-name"
              label="School Name"
              type="text"
              onChange={this.onChange}
              value={this.state.schoolName}
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
              rangeFrom={1920}
              rangeTo={new Date().getFullYear()}
              onChange={this.onChange}
              value={this.state.toYear}
            />
            <button onClick={this.addEducation}>Add</button>
            <ListContainer
              list={this.state.educations}
              type="education"
              emptyText="No education added yet."
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
              value={this.state.companyName}
            />
            <LabeledInput
              id="position-title"
              label="Position Title"
              type="text"
              onChange={this.onChange}
              value={this.state.positionTitle}
            />
            <LabeledInput
              id="main-task"
              label="Main Tasks"
              type="text"
              onChange={this.onChange}
              onEnter={this.addTask}
              value={this.state.mainTask}
            />
            <button onClick={this.addTask}>Add Task</button>
            <ListContainer
              list={this.state.mainTasks}
              type="task"
              emptyText="No tasks added yet."
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
              rangeFrom={1920}
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
            />
          </div>
        ),
      },
    ];

    const { currentPageIndex, finished } = this.state;
    const { title, content } = this.pages[currentPageIndex];

    const main = finished ? (
      <div className="congratulations">
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
      </div>
    );
  }
}

export default App;
