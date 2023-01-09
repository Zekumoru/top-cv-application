import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';

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
      </div>
    ),
  },
];

class App extends React.Component {
  currentPageIndex = 1;

  render() {
    const { title, content } = pages[this.currentPageIndex];

    return (
      <div className="App">
        <TopNavBar />
        <Form title={title} content={content} />
      </div>
    );
  }
}

export default App;
