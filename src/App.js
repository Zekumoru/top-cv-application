import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';

const pages = [
  {
    title: 'Personal Details',
    content: [
      <LabeledInput
        id="first-name"
        key="first-name"
        label="First Name"
        type="text"
      />,
      <LabeledInput
        id="last-name"
        key="last-name"
        label="Last Name"
        type="text"
      />,
      <LabeledInput id="email" key="email" label="Email" type="email" />,
      <LabeledInput
        id="phone-number"
        key="phone-number"
        label="Phone Number"
        type="tel"
      />,
    ],
  },
  {
    title: 'Education',
    content: [
      <LabeledInput
        id="title-of-study"
        key="title-of-study"
        label="Title of Study"
        type="text"
      />,
      <LabeledInput
        id="school-name"
        key="school-name"
        label="School Name"
        type="text"
      />,
      <LabeledInput
        id="from-year"
        key="from-year"
        label="From"
        type="dropdown"
        rangeFrom={1920}
        rangeTo={new Date().getFullYear()}
      />,
      <LabeledInput
        id="to-year"
        key="to-year"
        label="To"
        type="dropdown"
        rangeFrom={1920}
        rangeTo={new Date().getFullYear()}
      />,
    ],
  },
];

class App extends React.Component {
  currentPageIndex = 1;

  render() {
    const { content } = pages[this.currentPageIndex];

    return (
      <div className="App">
        <TopNavBar />
        <Form title="Personal Details">{content}</Form>
      </div>
    );
  }
}

export default App;
