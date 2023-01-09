import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';
import ListContainer from './components/ListContainer';

const pages = [
  {
    title: 'Personal Details',
    content: (
      <div className="content">
        <LabeledInput id="first-name" label="First Name" type="text" />
        <LabeledInput id="last-name" label="Last Name" type="text" />
        <LabeledInput id="email" label="Email" type="email" />
        <LabeledInput id="phone-number" label="Phone Number" type="tel" />
      </div>
    ),
  },
  {
    title: 'Education',
    content: (
      <div className="content">
        <LabeledInput id="title-of-study" label="Title of Study" type="text" />
        <LabeledInput id="school-name" label="School Name" type="text" />
        <LabeledInput
          id="from-year"
          label="From"
          type="dropdown"
          rangeFrom={1920}
          rangeTo={new Date().getFullYear()}
        />
        <LabeledInput
          id="to-year"
          label="To"
          type="dropdown"
          rangeFrom={1920}
          rangeTo={new Date().getFullYear()}
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
        <LabeledInput id="company-name" label="Company Name" type="text" />
        <LabeledInput id="position-title" label="Position Title" type="text" />
        <LabeledInput id="main-task" label="Main Tasks" type="text" />
        <button>Add Task</button>
        <ListContainer />
        <LabeledInput
          id="from-year"
          label="From"
          type="dropdown"
          rangeFrom={1920}
          rangeTo={new Date().getFullYear()}
        />
        <LabeledInput
          id="to-year"
          label="To"
          type="dropdown"
          rangeFrom={1920}
          rangeTo={new Date().getFullYear()}
        />
        <button>Add Work Experience</button>
        <ListContainer />
      </div>
    ),
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
    };
  }

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
      if (pageIndex >= pages.length) return;

      return {
        currentPageIndex: pageIndex,
      };
    });

    e.preventDefault();
  };

  render() {
    const { currentPageIndex } = this.state;
    const { title, content } = pages[currentPageIndex];

    return (
      <div className="App">
        <TopNavBar />
        <Form
          title={title}
          content={content}
          pageIndex={currentPageIndex}
          lastPage={currentPageIndex === pages.length - 1}
          onPreviousPage={this.previousPage}
          onNextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
