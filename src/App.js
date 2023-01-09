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
  currentPageIndex = 2;

  render() {
    const { title, content } = pages[this.currentPageIndex];

    return (
      <div className="App">
        <TopNavBar />
        <Form
          title={title}
          content={content}
          pageIndex={this.currentPageIndex}
        />
      </div>
    );
  }
}

export default App;
