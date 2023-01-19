import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';
import ListContainer from './components/ListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    const currentYear = new Date().getFullYear();

    this.state = {
      currentPageIndex: 0,
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
      if (pageIndex >= this.pages.length) return;

      return {
        currentPageIndex: pageIndex,
      };
    });

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
            <button>Add</button>
            <ListContainer />
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
              value={this.state.mainTask}
            />
            <button>Add Task</button>
            <ListContainer />
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
            <button>Add Work Experience</button>
            <ListContainer />
          </div>
        ),
      },
    ];

    const { currentPageIndex } = this.state;
    const { title, content } = this.pages[currentPageIndex];

    return (
      <div className="App">
        <TopNavBar />
        <Form
          title={title}
          content={content}
          pageIndex={currentPageIndex}
          lastPage={currentPageIndex === this.pages.length - 1}
          onPreviousPage={this.previousPage}
          onNextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
